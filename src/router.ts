
import {createRouter, createWebHashHistory} from 'vue-router'
import home from "./views/home.vue"
import doc from "./views/doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import DocDemo from "./components/DocDemo.vue"

import Intro from "./views/intro.vue"
import Install from "./views/install.vue"
import GetStart from "./views/getstart.vue"
import { h } from 'vue'

// const md=filename=>h(Markdown,{})


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
                    path:'intro',
                    component:Intro,
                },
                {
                    path:'install',
                    component:Install,
                },
                {
                    path:'getstart',
                    component:GetStart,
                },
                {
                    path:'switch',
                    component:SwitchDemo,
                },
                {
                    path:'switch',
                    component:SwitchDemo,
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