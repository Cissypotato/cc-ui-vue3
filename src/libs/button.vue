<template>
 
    <button class="cc-button" :class="classes">
      <slot />
    </button>
  
    
</template>

<script>
import { computed } from 'vue'
export default {
    name:'Button',
    inheritAttrs:false,
    props:{
      theme:{
        type:String,
        default:"button"
      },
      size:{
        type:String,
        default:"nomal"
      },
      leval:{
        type:String,
        default:"button"
      },

    },
    setup(props,context) {
      let {theme,size,leval}=props
      const classes=computed(()=>{
        return{
          [`cc-theme-${theme}`]:theme,
          [`cc-size-${size}`]:size,
          [`cc-leval-${leval}`]:leval,
        }
      })
      return classes
    }
}
</script>
<style lang="scss" >
  $h:32px;
  $border-color:red;
  $bg-color:pink;
  $color:#333;
  $radius:4px;

  .cc-button{
    height: $h;
    box-sizing: border-box;
    padding: 0 12px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #333;
    border-radius: $radius;
    white-space: nowrap;
    background: #fff;
    border:1px solid $bg-color;
    box-shadow: 0 1px 0 fade-out($color: red, $amount: 0.95);
    &+&{
      margin-left: 20px;
    }
    &:focus,&:hover{
      color: $border-color;
    }
    &:focus{ 
      outline: none;
    }
    &::-moz-focus-inner{border: 0;}//兼容Firefox
  }
</style>