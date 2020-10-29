<template>
<div>
  <div class="nav-and-banner">
    <top-nav />
    <div class="banner">
      <h1>CC-UI</h1>
      <h2>一个好用的ui框架</h2>
      <div class="actions">
            <a href="https://github.com/Cissypotato/cc-ui-vue3">GitHub</a>
            <router-link to="/doc">开始</router-link>
      </div>   
    </div>
  </div>
  <div class="features">
     <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-typescript"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-dengpao"></use>
      </svg>
  
  </div>
</div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  name: "home",
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.nav-and-banner{
  color:#769bf0;
  background: rgb(212,211,227);
  background: linear-gradient(45deg, rgba(212,211,227,1) 0%, rgba(244,243,248,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  >svg{
    width:64px;
    height: 64px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background:#1819ed;
      color: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>