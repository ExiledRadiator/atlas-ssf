<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AtlasProgress />
  </div>
</template>

<script>
import AtlasProgress from './components/AtlasProgress.vue'

export default {
  name: 'app',
  components: {
    AtlasProgress
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
  margin-top: 60px;
  background-color: black;
  font-size: 10pt;
}
</style>
