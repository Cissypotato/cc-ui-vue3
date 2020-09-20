<template>
    <div class="doc">
       <top-nav />
        <div class="main">
            <div class="aside" v-if="asideVisible">
             <h3>全部组件</h3>
             <ul>
                <li><router-link to='/doc/switch'>switch组件</router-link></li>
                <li><router-link to='/doc/button'>button组件</router-link></li>
                <li><router-link to='/doc/dialog'>dialog组件</router-link></li>
                <li><router-link to='/doc/tabs'>tabs组件</router-link></li>
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
import { inject, Ref } from 'vue'
import { router } from '../router'
export default {
    name:"doc",
    components:{
        TopNav 
    },
     setup(){
        const width=document.documentElement.clientWidth
        const asideVisible=inject<Ref<boolean>>('abc')
        router.afterEach(()=>{
            // console.log('路由切换了')
            if(width>500){
                asideVisible.value=true
                return
            }
            asideVisible.value=false
            // console.log('路由切换了')
        })
        return{ asideVisible}
    }
}
</script>

<style lang="scss" scoped>
    .doc{
        height: 100vh;
        display: flex;
        flex-direction: column;
        .main{
            flex: 1;
            border: 1px solid blue;
            display: flex;
            padding-top: 3.6rem;
            .content{
                flex: 1;
                border:1px solid red;
            }
        }
        .aside{
            background: lightblue;
            width: 150px;
            padding: 16px;
            
            >ul{
                >li{
                    padding: 4px 0;
                }
            }
            @media (max-width: 500px) {
                position: fixed;
                left: 0;
                top: 0;
                padding-top: 4.6rem;
                z-index: 9;
            }
        }
        
    }

</style>