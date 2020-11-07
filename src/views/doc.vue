<template>
    <div class="doc">
       <top-nav />
        <div class="main">
            <div class="aside" v-if="asideVisible">
              <h3>文档</h3>
            <ul>
                <li><router-link to='/doc/intro'>介绍</router-link></li>
            </ul>
            <ul>
                <li><router-link to='/doc/install'>安装</router-link></li>
            </ul>
            <ul>
                <li><router-link to='/doc/getstart'>开始</router-link></li>
            </ul>
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
            // border: 1px solid blue;
            display: flex;
            .content{
                padding: 20px;
                flex: 1;
                // border:1px solid red;
            }
        }
        .aside{
            background: lightblue;
            width: 150px;
            padding: 16px 0;
            >h3{
                padding: 4px 16px;
            }
            >ul{
                >li{    
                    a{
                         padding: 4px 16px;
                         display: block;
                        &.router-link-active{
                           
                            background: #fff;
                        }
                    }
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