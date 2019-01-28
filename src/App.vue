<template>
  <div id="app">
    <CharacterSelection />
    <AtlasProgress />
  </div>
</template>

<script>
import AtlasProgress from './components/AtlasProgress.vue'
import CharacterSelection from './components/CharacterSelection.vue'

export default {
  name: 'app',
  components: {
    AtlasProgress,
    CharacterSelection
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
  padding-top: 60px;
  background-color: black;
  font-size: 10pt;
}
</style>
