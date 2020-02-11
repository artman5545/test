<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <ccii></ccii>
  </div>
</template>

<script>
import ccii from './components/Custom/Index.vue'
export default {
  name: 'App',
  components: {
    ccii
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
