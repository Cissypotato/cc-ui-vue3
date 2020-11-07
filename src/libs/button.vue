<template>
 
    <button class="cc-button" :class="classes" :disabled="disabled">
      <slot />
    </button>
  
    
</template>

<script>
import { computed } from 'vue'
export default {
    name:'Button',
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
      disabled:{
        type:Boolean,
        default:false
      }
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
      return {classes}
    }
}
</script>
<style lang="scss" >
  $h:32px;
  $border-color:#dbdbdb;
  $hover-border-corlor:#b5b5b5;
  $bg-color:pink;
  $color:#333;
  $radius:4px;

  .cc-button{
    height: $h;
    margin-top: 10px;
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
    border:1px solid $border-color;
    box-shadow: 0 1px 0 fade-out($color:$hover-border-corlor, $amount: 0.95);
    &+&{
      margin-left: 20px;
    }
   &:hover{
      border-color:$hover-border-corlor;
    }
    &:focus{
      border-color:#3273dc;
      box-shadow: 0 0 2px #3273dc;
    }
    &:focus{ 
      outline: none;
    }
    &::-moz-focus-inner{border: 0;}//兼容Firefox
    &.cc-theme-text{
      border:none;
    }
    &.cc-theme-text:hover{
      background:#fafafa;
    }
    &.cc-theme-link{
      border:none;
      color: #3273dc;
    }
    &.cc-theme-button{
      &.cc-size-small{
        border-radius: 2px;
        font-size: .75em;
         height:(3*$h)/4;
        padding: 0 8px;
      }
       &.cc-size-large{
        font-size: 1.2rem;
        padding: 0 16px;
        height:1.2*$h;
      }
    }
    &.cc-theme-button{
      &.cc-leval-primary{
        background: #00c4a7;
        border: transparent;
        color: #fff;
      }
      &.cc-leval-success{
        background: #48c774;
         border: transparent;
        color: #fff;
      }
      &.cc-leval-warning{
        background: #ffdd57;
        border: transparent;
      }
      &.cc-leval-danger{
        background: #f14668;
        border: transparent;
        color: #fff;
      }
    }
    &.cc-theme-button{
      &[disabled]{
        cursor: not-allowed;
        color:gray
      }
    }
    &.cc-theme-text{
      &[disabled]{
        cursor: not-allowed;
        color:gray
      }
    }
  }
</style>