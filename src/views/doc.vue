<template>
    <div class="doc">
       <top-nav />
        <div class="main">
            <div class="aside">
             <h3>全部组件</h3>
             <ul>
                <li><router-link to='/switch'>switch组件</router-link></li>
                <li><router-link to='/button'>button组件</router-link></li>
                <li><router-link to='/dialog'>dialog组件</router-link></li>
                <li><router-link to='/tabs'>tabs组件</router-link></li>
             </ul>
            </div>
            <div class="content">
             <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
    name:"doc",
    components:{
        TopNav 
    }
}
</script>

<style lang="scss" scoped>
    .doc{
        .aside{
            position: fixed;
            left: 0;
            top: 0;
            background: lightblue;
            width: 150px;
            padding: 16px;
            padding-top: 4.6rem;
            >ul{
                >li{
                    padding: 4px 0;
                }
            }
        }
        .content{
            border:1px solid red;
        }
    }

</style>