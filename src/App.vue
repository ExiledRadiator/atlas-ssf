<template>
  <div class="container">
    <div id="app">
      <CharacterSelection @items-loaded="updateItems" />
      <AtlasProgress :items="items" :mapCounts="mapCounts" />
    </div>
  </div>
</template>

<script>
import AtlasProgress from './components/AtlasProgress.vue'
import CharacterSelection from './components/CharacterSelection.vue'
import maps from './maps.js'

export default {
  name: 'app',
  components: {
    AtlasProgress,
    CharacterSelection
  },
  data () {
    return {
      items: new Array(maps.length).fill(false),
      mapCounts: new Object(),
      atlasVersion: 3.6
    }
  },
  methods: {
    updateItems (items) {
      const newArray = new Array(maps.length).fill(false);
      
      const matchingMapIds = items.map(i => {
        const matchedMap = maps.find(m => i.typeLine.includes(m.name));
        if (matchedMap) {
          return matchedMap.id;
        }
      });
      
      // de-duplicate array
      const uniqueMapIds = Array.from(new Set(matchingMapIds));
      
      // update blank array with maps that are in inv or stashes
      uniqueMapIds.forEach(i => newArray[i] = true);
      this.items = newArray;
      localStorage.setItem('haveMaps', this.items);

      const mapCounts = matchingMapIds.reduce((prev, id) => {
        prev[id] = (prev[id] || 0) + 1;
        return prev;
      }, {});

      this.mapCounts = mapCounts;
      localStorage.setItem('mapCounts', JSON.stringify(this.mapCounts));
    }
  },
  created () {
    const savedAtlasVersion = localStorage.getItem('atlasVersion');
    const mapCounts = localStorage.getItem('mapCounts');

    if (savedAtlasVersion) {
      if (savedAtlasVersion < this.atlasVersion) {
        resetAtlas(this.atlasVersion);
      }
    }
    else {
      resetAtlas(this.atlasVersion);
    }

    if (mapCounts) {
      this.mapCounts = mapCounts;
    }
  }
}

function resetAtlas(version) {
  let keys = Object.keys(localStorage);
  let length = keys.length;
  
  for (let i = 0; i < length; i++) {
    if (keys[i] !== 'accountName' && keys[i] !== 'sessionId') {
      localStorage.removeItem(keys[i]);
    }
  }

  localStorage.setItem('atlasVersion', version);
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
  padding-top: 30px;
  background-color: black;
  font-size: 10pt;
  min-width: 715px;
}
</style>
