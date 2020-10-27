<template>
    <div>
        <div>button示例</div>
        <p>theme</p>
       <Button>default</Button>
       <Button theme="button">button</Button>
       <Button theme="text">text</Button>
       <Button theme="link">link</Button>
       <p>size</p>
       <Button size="small">small</Button>
       <Button size="normal">normal</Button>
       <Button size="large">large</Button>
       
       <p>leval</p>
       <Button leval="primary">primary</Button>
       <Button leval="success">success</Button>
       <Button leval="warning">warning</Button>
       <Button leval="danger">danger</Button>

       <p>disabled</p>
       <Button disabled >disabled</Button>
       <Button disabled theme="text">disabledText</Button>
       

       <p>loading</p>
       
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