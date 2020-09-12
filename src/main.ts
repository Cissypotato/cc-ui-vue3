import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createRouter, createWebHashHistory} from 'vue-router'

import home from "./views/home.vue"
import doc from "./views/doc.vue"

import Switch from "./components/Switch.vue"
import Button from "./components/Button.vue"
import Dialog from "./components/Dialog.vue"
import Tabs from "./components/Tabs.vue"


const router=createRouter({
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
                    path:'/switch',
                    component:Switch,
                },
                {
                    path:'/button',
                    component:Button,
                },
                {
                    path:'/dialog',
                    component:Dialog,
                },
                {
                    path:'/tabs',
                    component:Tabs,
                },
            ]
        },
    ],
  })

const app=createApp(App)
app.use(router)
app.mount('#app')
