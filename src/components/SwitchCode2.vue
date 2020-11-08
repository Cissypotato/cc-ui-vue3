<demo>
  支持disabled
</demo>

<template>
  <Switch v-model:value="bool" disabled />
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