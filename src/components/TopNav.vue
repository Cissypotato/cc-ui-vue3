<template>
    <div class="top-nav">
        <div class="logo" >CC-UI</div>
        <div class="navs">
            <a href="">nav1</a>
            <a href="">nav2</a>
        </div>
        <span class="toggleAside" @click="toggleVisible">SSS</span>
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    name:'top-nav',
    setup(){
        const asideVisible=inject<Ref<boolean>>('abc')
        const toggleVisible=()=>{
            console.log(asideVisible.value)
            asideVisible.value=!asideVisible.value
        }
        return{ toggleVisible}
    }
}
</script>
<style lang="scss" scoped>
    .top-nav{
        display: flex;
        height: 3.6rem;
        justify-content: space-between;
        align-items: center;
        line-height: 3.6rem;
        background: #fff;
        border: 1px solid red;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        .logo{
            font-weight: 600;
            font-size:1.25rem;
            margin-left: 20px;
        }
        .navs{
            a{
                margin-right: 20px;
            }
        }
        .toggleAside{
            display: none;
        }
        @media (max-width: 500px) {
            >.navs{
                display: none;
            }
            >.logo{
                margin: 0 auto;
            }
            >.toggleAside{
                display: block;
                position: absolute;
                left: 20px;
            }
        }
    }
</style>