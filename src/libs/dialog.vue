<template>
   <template v-if="visible">
    <div class="cc-dialog-overlay" @click="closeOnClickOverlay">
        遮罩层
    </div>
    <Teleport to="body">
        <div class="cc-dialog-wrapper">
            <div class="cc-dialog">
                <header>
                    {{title}}
                    <span class="cc-dialog-close" @click="close"></span>
                </header>
                <main>
                    <slot name="content"/>
                </main>
                <footer>
                    <Button leval="primary" @click="ok">ok</Button>
                    <Button @click="cancel">cancel</Button>
                </footer>
            </div>

        </div>
    </Teleport>
    </template>
</template>
<script >
import Button from "./button.vue"
export default {
    name:'Dialog',
    props:{
        title:{
            type:String,
            default:"提示"
        },
        visible:{
            type:Boolean,
            default:false
        },
        closeOnClickOverlay:{
            type:Boolean,
            default:true
        },
        ok:{
            type:Function
        },
        cancel:{
            type:Function
        }
    },
    setup(props,context){

       let close =()=>{
           context.emit('update:visible',false)
       }
       const closeOnClickOverlay=()=>{
           if(props.closeOnClickOverlay){
               close()
           }
       }
        const ok=()=>{
            if(props.ok &&props.ok()!==false){
                close()
            }
            
            // context.emit('update:visible',false)
        }
        const cancel=()=>{
            
            props.cancel?.() 
            close()
            // context.emit('update:visible',false)
        }
       return {close,closeOnClickOverlay,ok,cancel}
        
    },
    components:{
        Button
    }
    
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.cc-dialog{
    min-width: 15em;
    max-width: 90%;
    border-radius: $radius;
    border: 1px solid $border-color;
    background: #fff;
    &-overlay{
        position: fixed;
        top: 0;
        left: 0;
        background: fade_out(black, 0.8);
        height: 100%;
        width: 100%;
        z-index: 10;
    }
    &-wrapper{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 11;
    }
    >header{
        padding: 8px 12px;
        border-bottom: 1px solid $border-color;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
    }
    >main {
    padding: 12px 16px;
    }
    >footer {
        border-top: 1px solid $border-color;
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    }
}

</style>