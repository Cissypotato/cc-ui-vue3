<demo>
  常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>
<script>
import { ref } from "vue";
import Switch from "../libs/switch1.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>