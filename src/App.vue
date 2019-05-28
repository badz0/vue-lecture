<template>
  <div id="app">
    <hello-dog />
  </div>
</template>

<script>
import HelloDog from './components/HelloDog.vue';

export default {
  name: 'app',
  components: {
    HelloDog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
