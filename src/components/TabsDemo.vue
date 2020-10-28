<template>
    <div>
        <p>示例1</p>
        <Tabs v-model:selected="title">
            <Tab title="导航1">内容1</Tab>
            <Tab title="导航233536436">内容2</Tab>
        </Tabs>
        
    </div>
</template>
<script lang="ts">
import Tabs from '../libs/tabs.vue'
import Tab from '../libs/tab.vue'
import { ref } from 'vue'

export default {
    name:"tabs-demo",
    components:{
        Tabs,
        Tab
    },
    setup(props,context) {
        const title=ref("导航233536436")
        return{title}
    }
}
</script>