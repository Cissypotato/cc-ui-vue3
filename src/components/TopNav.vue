<template>
    <div class="top-nav">
        <div class="logo">CC-UI</div>
        <div class="navs">
            <a href="">nav1</a>
            <a href="">nav2</a>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name:'top-nav'
}
</script>
<style lang="scss" scoped>
    .top-nav{
        display: flex;
        height: 3.6rem;
        justify-content: space-between;
        line-height: 3.6rem;
        background: #fff;
        border: 1px solid red;
        position: relative;
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

    }
</style>