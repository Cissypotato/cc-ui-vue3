<template>
    <div class="switch-wrapper">
        
        <switch1 v-model:value="y"> </switch1>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
//  import Switch from '../libs/Switch.vue.vue'
 import switch1 from '../libs/switch1.vue'


export default {
    name:"switchDemo",
    components:{
        switch1
    },
    setup(){
        const y=ref(false)
        // const b=(event)=>{
        //     console.log(event)
        // }
        return{y}
    }
}
</script>

<style lang="scss" scoped>
    .switch-wrapper{
        >div{
            height: 120px;
            background: pink;
        }
    }
</style>