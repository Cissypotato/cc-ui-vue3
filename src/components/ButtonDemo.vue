<template>
    <div>
       <Button @click="abc" @mouseover="abc" :size="size" disabled>button2</Button>
    </div>
</template>
<script lang="ts">
import Button from '../libs/button.vue'
export default {
    name:"button-demo",
    components:{Button},
    setup(props) {
        const abc=()=>{
            console.log(123)
        }
        const size=false
        return {abc,size}
    }
}
</script>