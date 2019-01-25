<template>
  <div>
    <div class="tier" v-for="tier in tiers">
      <div><h3>Tier {{ tier.number }} </h3>
        <a href="#" @click="toggleClicked(tier.number)">
          <span v-if="allChecked[tier.number - 1]">Uncheck all</span>
          <span v-else>Check all</span>
        </a>
      </div>
      <table>
        <thead>
          <th class="checkbox centered">Have</th>
          <th class="checkbox centered">Compl.</th>
          <th class="checkbox centered">Bonused</th>
          <th class="map left">Map</th>
          <th class="left">{{ tier.notes }}</th>
        </thead>
        <tbody>
          <tr v-for="map in mapsInTier(tier.number)" :key="map.id">
            <td class="checkbox centered" :class="'tier-' + tier.number">
              <input type="checkbox" :id="'have-' + map.id" :checked="have[map.id]" @input="updateHave">
            </td>
            <td class="checkbox centered" :class="'tier-' + tier.number">
              <input type="checkbox" :id="'completed-' + map.id" :checked="completed[map.id]" @input="updateCompleted">
            </td>
            <td class="checkbox centered" :class="'tier-' + tier.number">
              <input type="checkbox" :id="'bonused-' + map.id" :checked="bonused[map.id]" @input="updateBonused">
            </td>
            <td class="map left" :class="{ 'done': completed[map.id] }">{{ map.name }}</td>
            <td class="left" :class="{ 'done': have[map.id] }">
              <div v-if="map.upgradesFrom.length > 0">{{ map.upgradesFrom.join(', ') }}</div>
              <div v-if="completed[map.id]"></div>
            </td>
          </tr>     
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import maps from '../maps.js'
import tiers from '../tiers.js'

export default {
  name: 'AtlasProgress',
  data () {
    return {
      have: new Array(100).fill(false),
      completed: new Array(100).fill(false),
      bonused: new Array(100).fill(false),
      allChecked: new Array(16).fill(false),
      checkAllMsg: 'Check all',
      uncheckAllMsg: 'Uncheck all',
    }
  },
  methods: {
    mapsInTier (tier) {
      return maps.filter(m => m.tier == tier);
    },

    // Need to use .splice() to update Arrays in data
    // to maintain reactivity
    updateHave (event) {
      const id = convertId(event.target.id);      
      this.have.splice(id, 1, event.target.checked);
      this.$cookie.set('haveMaps', this.have.join(','), { expires: '1Y' });
    },

    updateCompleted (event) {
      const id = convertId(event.target.id);  
      this.completed.splice(id, 1, event.target.checked);
      this.$cookie.set('completedMaps', this.completed.join(','), { expires: '1Y' });
    },

    updateBonused (event) {
      const id = convertId(event.target.id);
      this.bonused.splice(id, 1, event.target.checked);
      this.$cookie.set('bonusedMaps', this.bonused.join(','), { expires: '1Y' });
    },
    toggleClicked (tierNumber) {
      const checkboxesInTier = Array.from(document.getElementsByClassName('tier-' + tierNumber));
      const checked = this.allChecked[tierNumber - 1];
      const mapsInTier = this.maps.filter(m => m.tier == tierNumber);
      
      checkboxesInTier.forEach(box => box.checked = !checked);
      this.allChecked.splice(tierNumber - 1, 1, !checked)
      
      mapsInTier.forEach(m => {
        this.have.splice(m.id, 1, !checked);
        this.completed.splice(m.id, 1, !checked);
        this.bonused.splice(m.id, 1, !checked);
      });

      this.$cookie.set('haveMaps', this.have.join(','), { expires: '1Y' });
      this.$cookie.set('completedMaps', this.completed.join(','), { expires: '1Y' });
      this.$cookie.set('bonusedMaps', this.bonused.join(','), { expires: '1Y' });
    }
  },
  computed: {
    maps () {
      return maps;
    },
    tiers () {
      return tiers;
    }
  },
  created () {
    const haveCookie = this.$cookie.get('haveMaps');
    const completedCookie = this.$cookie.get('completedMaps');
    const bonusedCookie = this.$cookie.get('bonusedMaps');
    
    if (haveCookie) {
      const haveCookieArray = haveCookie.split(',').map(i => stringToBoolean(i));
      this.have = haveCookieArray;
    }

    if (completedCookie) {
      const completedCookieArray = completedCookie.split(',').map(i => stringToBoolean(i));
      this.completed = completedCookieArray;
    }

    if (bonusedCookie) {
      const bonusedCookieArray = bonusedCookie.split(',').map(i => stringToBoolean(i));
      this.bonused = bonusedCookieArray;
    }
  }
}

function convertId (stringId) {
  const index = stringId.indexOf('-');
  const id = parseInt(stringId.slice(index + 1));
  
  return id;
}

function stringToBoolean(str) {
  return (str == 'true');
}
</script>

<style>
h3 {
  text-align: left;
  padding-top: 30px;
}

.done {
  color: gray;
}

a, a:visited {
  color: whitesmoke;
}

h3 {
  display: inline;
  padding-right: 20px;
}

.tier {
  padding: 10px 30px;
}

table {
  padding-top: 10px;
}

.centered {
  text-align: center;
}

.left {
  text-align: left;
}

td.checkbox, th.checkbox {
  width: 55px;
}

td.map, th.map {
  width: 100px;
  padding-left: 20px;
}

input[type=checkbox] {
  transform: scale(2);
}
</style>
