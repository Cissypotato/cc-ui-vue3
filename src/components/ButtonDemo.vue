<template>
    <div>
        <div>button示例</div>
        <p>theme</p>
       <Button>default</Button>
       <Button theme="button">button</Button>
       <Button theme="text">text</Button>
       <Button theme="link">link</Button>
       <p>size</p>
       <Button size="button">button</Button>
       <Button size="text">text</Button>
       <Button size="link">link</Button>
       <p>leval</p>
       <Button leval="button">button</Button>
       <Button leval="text">text</Button>
       <Button leval="link">link</Button>
    </div>
</template>
<script lang="ts">
import Button from '../libs/button.vue'
export default {
    name:"button-demo",
    components:{Button},
    setup(props) {
       
    }
}
</script>