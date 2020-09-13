<template>
    <div class="switch-wrapper">
        
        <switch1> </switch1>
    </div>
</template>
<script lang="ts">
//  import Switch from '../libs/Switch.vue.vue'
 import switch1 from '../libs/switch1.vue'


export default {
    name:"switchDemo",
    components:{
       
        switch1
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