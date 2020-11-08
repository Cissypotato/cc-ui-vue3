<template>
  <div class="demo">
    <h2>{{component.title}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre
        v-html="
          Prism.highlight(
            component.__sourceCode,
            Prism.languages.html,
            'html'
          )
        "
      ></pre>
    </div>
  </div>
</template>


<script lang="ts">
  import { ref } from "vue";
  import Button from "../libs/button.vue";
  import 'prismjs';
  import 'prismjs/themes/prism.css';
  
  const Prism=(window as any).Prism
 
export default {
  name: "showcode",
  components: {
    Button,
  },
  props:{
      component:Object
  },
  setup() {
    
    return {Prism};
  },
};
</script>
