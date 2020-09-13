<template>
  
  <router-view></router-view>
</template>

<script lang="ts">
import {ref,provide} from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup(){
    const width=document.documentElement.clientWidth
    const asideVisible= ref(width<500?false:true)
    
    provide('abc',asideVisible)
  }
}
</script>
