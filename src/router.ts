
import {createRouter, createWebHashHistory} from 'vue-router'
import home from "./views/home.vue"
import doc from "./views/doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import DocDemo from "./components/DocDemo.vue"
export const router=createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/',
            component:home
        },
        {
            path:'/doc',
            component:doc,
            children:[
                {
                    path:'',
                    component:DocDemo,
                },
                {
                    path:'switch',
                    component:SwitchDemo,
                },
                {
                    path:'button',
                    component:ButtonDemo,
                },
                {
                    path:'dialog',
                    component:DialogDemo,
                },
                {
                    path:'tabs',
                    component:TabsDemo,
                },
            ]
        },
    ],
  })