<template>
    <div >
        <button class="cc-switch" :class="{[`cc-checked`]:value}" @click="toggle" :disabled="disabled"><span ></span></button>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name:"switch1",
    props:{
        value:Boolean,
        disabled:{
        type:Boolean,
        default:false
      }
    },
    setup(props,context){
        const toggle=()=>{
            context.emit('update:value',!props.value)
        }
        return{toggle}
    }
}
</script>
<style lang="scss" >
$h1:22px;
$h2:$h1 - 4px;
$h3:$h2+2px;
$mainColor:blue;
$defaultColor:gray;
.cc-switch:focus{outline: none;}
.cc-switch{
    height: $h1;
    width: $h1*2;
    border-radius: $h1;
    background: $defaultColor;
    border: none;
    position: relative; 
}
span{
        height: $h2;
        width: $h2;
        border-radius: $h2/2;
        background: #fff;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: left 250ms;
    }
    .cc-switch.cc-checked{
        background: $mainColor;
    }
    .cc-switch.cc-checked span{
        
        left:calc(100% - #{$h3});
    }

// cc-switch:hover > span{
//         left: calc(100% - #{$h2}-2px);
//     }


</style>