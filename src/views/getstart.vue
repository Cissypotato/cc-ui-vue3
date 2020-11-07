<template>
  <article class="markdown-body" v-html="getstart">
  </article>
</template>

<script>
import getstart from "../markdown/getstart.md"
export default {
    data(){
        return{
            getstart
        }
    }
}
</script>