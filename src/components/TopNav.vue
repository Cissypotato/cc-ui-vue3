<template>
  <div class="top-nav">
    <div class="top-fixed">
      <div class="logo">
        <svg class="icon">
          <use xlink:href="#icon-cc1"></use>
        </svg>
      </div>
      <div class="navs">
        <a href="">文档</a>
      </div>
      <span class="toggleAside" @click="toggleVisible">SSS</span>
    </div>
    <div class="top-height"></div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "top-nav",
  setup() {
    const asideVisible = inject<Ref<boolean>>("abc");
    const toggleVisible = () => {
      console.log(asideVisible.value);
      asideVisible.value = !asideVisible.value;
    };
    return { toggleVisible };
  },
};
</script>
<style lang="scss" scoped>
.top-nav {
  .top-fixed {
    // border: 1px solid yellow;
    display: flex;
    height: 3.6rem;
    justify-content: space-between;
    align-items: center;
    line-height: 3.6rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 20;
    background: #fff;
    border-bottom: 1px solid #eee;
    .logo {
      font-weight: 600;
      font-size: 1.25rem;
      margin-left: 20px;
    }
    .navs {
      a {
        margin-right: 20px;
      }
    }
    .toggleAside {
      display: none;
    }
    @media (max-width: 500px) {
      > .navs {
        display: none;
      }
      > .logo {
        margin: 0 auto;
      }
      > .toggleAside {
        display: block;
        position: absolute;
        left: 20px;
      }
    }
  }
  .top-height{
    height:3.6rem;
  }
}
</style>