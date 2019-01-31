<template>
  <div id="app">
    <CharacterSelection @items-loaded="updateItems" />
    <AtlasProgress :items="items" />
  </div>
</template>

<script>
import AtlasProgress from './components/AtlasProgress.vue'
import CharacterSelection from './components/CharacterSelection.vue'
import maps from './maps.js'
import { longStackSupport } from 'q';

export default {
  name: 'app',
  components: {
    AtlasProgress,
    CharacterSelection
  },
  data () {
    return {
      items: new Array(100).fill(false),
    }
  },
  methods: {
    updateItems (items) {
      const newArray = new Array(100).fill(false);
      
      const matchingMapIds = items.map(i => {
        const matchedMap = maps.find(m => i.typeLine.includes(m.name));
        if (matchedMap) {
          return matchedMap.id;
        }
      });
      
      // de-duplicate array before further processing
      const uniqueMapIds = Array.from(new Set(matchingMapIds));
      
      // update blank array with maps that are in inv or stashes
      uniqueMapIds.forEach(i => newArray[i] = true);
      this.items = newArray;
      localStorage.setItem('haveMaps', this.items);
    }
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
