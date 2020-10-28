<template>
  <div class="cc-tabs">
    <div class="cc-tabs-nav" ref="container">
      <div
        class="cc-tabs-nav-item"
        :class="{selected:title===selected}"
        v-for="(title, index) in titles"
        :ref="el=>{if(title===selected) selectedItem=el}"
        @click="select(title)"
        key="index"
      >
        {{ title }}
      </div>
      <div class="cc-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="cc-tabs-content">
      <component
        class="cc-tabs-content-item"
        :class="{selected:item.props.title===selected}"
        v-for="(item, index) in defaults"
        key="index"
        :is="item"
      ></component>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, onUpdated, ref, watchEffect } from 'vue';
import Tab from "./tab.vue";
export default {
  name: "tabs",
  props:{
      selected:{
          type:String
      }
  },
  setup(props, context) {
    const selectedItem= ref < HTMLDivElement >(null)
    const indicator= ref < HTMLDivElement >(null)
    const container= ref < HTMLDivElement >(null)
    const abc=()=>{
        console.log(selectedItem.value)
        const {width}=selectedItem.value.getBoundingClientRect()
        indicator.value.style.width=width+"px"
        const {left:left1}=container.value.getBoundingClientRect()
        const {left:left2}=selectedItem.value.getBoundingClientRect()
        indicator.value.style.left=(left2-left1)+"px"
    }
    onMounted(()=>{
        watchEffect(abc)
    })
    // onUpdated(abc)
    
    const defaults = context.slots.default();
    defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error("Tsbs里面请使用Tab标签");
      }
    });
    const titles = defaults.map((item) => {
      return item.props.title;
    });
    const select=(title)=>{
        context.emit('update:selected',title)
    }
    return { defaults, titles,select,selectedItem,indicator ,container};
  },
};
</script>

<style lang="scss">
$blue: #3273dc;
$color: #333;
$border-color: #d9d9d9;

.cc-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator{
        position: absolute;
        height: 3px;
        width: 100px;
        background: $blue;
        left: 0;
        bottom: -1px;
        transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item{
        display: none;
        &.selected{
            display: block;
        }
    }
  }
}
</style>