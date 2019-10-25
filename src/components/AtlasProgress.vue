<template>
  <div>
    <div>
      <a @click="toggleAllHidden" class="big-link">{{ hideAll ? 'Unhide all' : 'Hide all' }}</a>
    </div>
    <div class="tiers">
      <div class="tier" v-for="tier in tiers" :class="{'shaded': shadeBackground(tier.number)}">
        <div>
          <h3>Tier {{ tier.number }}</h3>
          <a @click="toggleClicked(tier.number)">
            <span v-if="allChecked[tier.number - 1]">Uncheck all</span>
            <span v-else>Check all</span>
          </a>
          <a @click="toggleHidden(tier.number)">
            <span v-if="tierHidden[tier.number - 1]">Unhide</span>
            <span v-else>Hide</span>
          </a>
        </div>

        <table :class="{hidden: tierHidden[tier.number - 1]}">
          <thead>
            <th class="checkbox centered">Have</th>
            <th class="checkbox centered">Compl.</th>
            <th class="checkbox centered">Bonus</th>
            <th class="checkbox centered">Soul</th>
            <th class="map left">Map</th>
            <th class="left">{{ tier.notes }}</th>
          </thead>
          <tbody>
            <tr v-for="map in mapsInTier(tier.number)" :key="map.id">
              <td class="checkbox centered" :class="'tier-' + tier.number">
                <input
                  type="checkbox"
                  :id="'have-' + map.id"
                  :checked="have[map.id]"
                  @input="updateHave"
                />
              </td>
              <td class="checkbox centered" :class="'tier-' + tier.number">
                <input
                  type="checkbox"
                  :id="'completed-' + map.id"
                  :checked="completed[map.id]"
                  @input="updateCompleted"
                />
              </td>
              <td class="checkbox centered" :class="'tier-' + tier.number">
                <input
                  type="checkbox"
                  :id="'bonused-' + map.id"
                  :checked="bonused[map.id]"
                  @input="updateBonused"
                />
              </td>
              <td class="checkbox centered" :class="'tier-' + tier.number">
                <input
                  v-if="map.pantheon"
                  type="checkbox"
                  :id="'pantheon-' + map.id"
                  :title="map.pantheonText"
                  :checked="pantheon[map.id]"
                  @input="updatePantheon"
                />
              </td>
              <td
                class="map left"
                :class="{ 'done': completed[map.id], 'unique': map.unique }"
              >{{ map.name }}</td>
              <td class="left" :class="{ 'done': have[map.id] }">
                <div v-if="map.upgradesFrom.length > 0">
                  <MapDisplay
                    v-for="(upgradeMap, index) in map.upgradesFrom"
                    :length="map.upgradesFrom.length"
                    :index="index"
                    :mapName="upgradeMap.name"
                    :hasMap="hasMap(upgradeMap.id)"
                    :mapCount="mapCount(upgradeMap.id)"
                  />
                </div>
                <div v-if="completed[map.id]"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import maps from "../maps.js";
import tiers from "../tiers.js";
import MapDisplay from "./MapDisplay.vue";

export default {
  name: "AtlasProgress",
  components: {
    MapDisplay
  },
  props: ["items", "mapCounts"],
  data() {
    return {
      have: this.items,
      completed: new Array(maps.length).fill(false),
      bonused: new Array(maps.length).fill(false),
      pantheon: new Array(maps.length).fill(false),
      allChecked: new Array(17).fill(false),
      tierHidden: new Array(17).fill(false),
      hideAll: false,
      tierColumns: 2
    };
  },
  methods: {
    mapsInTier(tier) {
      const tierMaps = maps.filter(m => m.tier == tier);

      return tierMaps.sort((a, b) => {
        if (a.unique && !b.unique) {
          return 1;
        } else if (!a.unique && b.unique) {
          return -1;
        } else {
          return a.id - b.id;
        }
      });
    },

    // Need to use .splice() to update Arrays in data
    // to maintain reactivity
    updateHave(event) {
      const id = convertId(event.target.id);
      this.have.splice(id, 1, event.target.checked);
      localStorage.setItem("haveMaps", this.have);
    },

    updateCompleted(event) {
      const id = convertId(event.target.id);
      this.completed.splice(id, 1, event.target.checked);
      localStorage.setItem("completedMaps", this.completed);
    },

    updateBonused(event) {
      const id = convertId(event.target.id);

      this.bonused.splice(id, 1, event.target.checked);
      localStorage.setItem("bonusedMaps", this.bonused);

      if (event.target.checked) {
        this.completed.splice(id, 1, event.target.checked);
        localStorage.setItem("completedMaps", this.completed);
      }
    },

    updatePantheon(event) {
      const id = convertId(event.target.id);
      this.pantheon.splice(id, 1, event.target.checked);
      localStorage.setItem("pantheonMaps", this.pantheon);
    },
    toggleClicked(tierNumber) {
      const checkboxesInTier = Array.from(
        document.getElementsByClassName("tier-" + tierNumber)
      );
      const checked = this.allChecked[tierNumber - 1];
      const mapsInTier = this.maps.filter(m => m.tier == tierNumber);

      checkboxesInTier.forEach(box => (box.checked = !checked));
      this.allChecked.splice(tierNumber - 1, 1, !checked);

      mapsInTier.forEach(m => {
        this.have.splice(m.id, 1, !checked);
        this.completed.splice(m.id, 1, !checked);
        this.bonused.splice(m.id, 1, !checked);
      });

      localStorage.setItem("haveMaps", this.have);
      localStorage.setItem("completedMaps", this.completed);
      localStorage.setItem("bonusedMaps", this.bonused);
      localStorage.setItem("allChecked", this.allChecked);
    },

    toggleHidden(tierNumber) {
      const hidden = this.tierHidden[tierNumber - 1];
      this.tierHidden.splice(tierNumber - 1, 1, !hidden);

      localStorage.setItem("tierHidden", this.tierHidden);
    },

    toggleAllHidden() {
      this.hideAll = !this.hideAll;
      this.tierHidden = new Array(17).fill(this.hideAll);
    },

    hasMap(mapId) {
      return this.have[mapId] ? this.have[mapId] : false;
    },

    mapCount(mapId) {
      let count;

      if (this.mapCounts[mapId]) {
        count = parseInt(this.mapCounts[mapId]);
      } else {
        count = 0;
      }

      return count;
    },

    shadeBackground(id) {
      const row = Math.ceil(id / this.tierColumns);
      let shade;

      if (this.tierColumns % 2 == 0) {
        if (row % 2 == 1 && id % 2 == 0) {
          shade = true;
        } else if (row % 2 == 0 && id % 2 == 1) {
          shade = true;
        } else {
          shade = false;
        }
      } else {
        if (row % 2 == 1 && id % 2 == 0) {
          shade = true;
        } else if (row % 2 == 0 && id % 2 == 0) {
          shade = true;
        } else {
          shade = false;
        }
      }

      return shade;
    },

    onResize() {
      if (window.innerWidth < 800) {
        this.tierColumns = 1;
      } else {
        this.tierColumns = 2;
      }
    }
  },
  computed: {
    maps() {
      return maps;
    },

    tiers() {
      return tiers;
    }
  },
  watch: {
    items(items) {
      this.have = items;
    }
  },

  created() {
    const haveMaps = localStorage.haveMaps;
    const completedMaps = localStorage.completedMaps;
    const bonusedMaps = localStorage.bonusedMaps;
    const pantheonMaps = localStorage.pantheonMaps;
    const allChecked = localStorage.allChecked;
    const tierHidden = localStorage.tierHidden;

    if (haveMaps) {
      const haveMapsArray = haveMaps.split(",").map(i => stringToBoolean(i));
      this.have = haveMapsArray;
    }

    if (completedMaps) {
      const completedMapsArray = completedMaps
        .split(",")
        .map(i => stringToBoolean(i));
      this.completed = completedMapsArray;
    }

    if (bonusedMaps) {
      const bonusedMapsArray = bonusedMaps
        .split(",")
        .map(i => stringToBoolean(i));
      this.bonused = bonusedMapsArray;
    }

    if (pantheonMaps) {
      const pantheonMapsArray = pantheonMaps
        .split(",")
        .map(i => stringToBoolean(i));
      this.pantheon = pantheonMapsArray;
    }

    if (allChecked) {
      const allCheckedArray = allChecked
        .split(",")
        .map(i => stringToBoolean(i));
      this.allChecked = allCheckedArray;
    }

    if (tierHidden) {
      const tierHiddenArray = tierHidden
        .split(",")
        .map(i => stringToBoolean(i));
      this.tierHidden = tierHiddenArray;
    }

    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};

function convertId(stringId) {
  const index = stringId.indexOf("-");
  const id = parseInt(stringId.slice(index + 1));

  return id;
}

function stringToBoolean(str) {
  return str == "true";
}
</script>

<style>
h3 {
  display: inline;
}

.done {
  color: gray;
}

.unique {
  color: rgb(175, 96, 37);
}

a,
a:visited {
  color: whitesmoke;
  text-decoration: underline;
  cursor: pointer;
  padding-left: 20px;
}

.tiers {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  gap: 5px 20px;
  padding-top: 30px;
  padding-left: 10px;
}

.tier {
  max-width: 600px;
  padding: 10px;
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

th {
  font-size: 9pt;
}
td.checkbox,
th.checkbox {
  width: 40px;
}

td.map,
th.map {
  width: 125px;
  min-width: min-content;
  padding-left: 20px;
}

input[type="checkbox"] {
  transform: scale(1.5);
}

.shaded {
  background: #262627;
}

.hidden {
  display: none;
}

.big-link {
  font-size: 12pt;
}

@media (max-width: 850px) {
  .tiers {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    gap: 5px 20px;
    padding-top: 30px;
    padding-left: 10px;
  }
}
</style>
