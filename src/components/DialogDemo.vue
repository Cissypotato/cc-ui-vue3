<template>
    <div>
       <p>示例1</p> 
       <div @click="toggle">打开dialog</div>
       <Dialog v-model:visible="isVisible" :closeOnClickOverlay="false" :ok="ok" :cancel="cancel">
        <template v-slot:content>
            <p>hiiii</p>
        </template>
       </Dialog>
        <p>示例2</p>
        <div @click="showDialog">showDialog</div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from "../libs/dialog.vue"
import {openDialog} from "../libs/showDialog"

export default {
    name:"dialog-demo",
    components:{
        Dialog
    },
    setup(props,context) {
        const isVisible=ref(false)
        let toggle=()=>{
            isVisible.value=true
            console.log(isVisible.value)
        }
        const ok=()=>{
            return true
        }
        const cancel=()=>{
            
        }
        const showDialog=()=>{
            openDialog({
                title:"233",
                content:"meiyou",
                ok:()=>{
                    console.log('ok')
                },
                cancel:()=>{
                    console.log('cancel')
                }
            })
        }
        return {isVisible,toggle,ok,cancel,showDialog}
    }
}
</script>