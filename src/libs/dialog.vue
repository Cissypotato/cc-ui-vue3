<template>
   <div>
    <div class="cc-dialog-overlay">
        遮罩层
    </div>
    <div class="cc-dialog-wrapper">
        <div class="cc-dialog">
            <header>
                标题
            </header>
            <main>
                <p>p1</p>
                <p>p1</p>
            </main>
            <footer>
                <Button>ok</Button>
                <Button>cancel</Button>
            </footer>
        </div>
    </div>
    </div>
</template>
<script >
import Button from "./button.vue"
export default {
    name:'Dialog',
    components:{
        Button
    }
    
}
</script>

<style lang="scss">

</style>