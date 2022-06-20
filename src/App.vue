<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
