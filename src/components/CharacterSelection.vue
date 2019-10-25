<template>
  <div class="inputs">
    <AccountInformation
      class="input"
      id="account"
      :loading="characterLoading"
      :errorMessage="errorMessage"
      @load-account="getCharacters"
      @api="setApi"
    />

    <div class="input" id="characters">
      <label for="characterList" class="text">Characters</label>
      <select v-model="character" @change="characterChanged" id="characterList">
        <option disabled>--Select a character--</option>
        <option
          v-for="character in characters"
          :value="character"
          :key="character.name + '-' + character.league"
        >{{ character.name }} ({{ character.league }})</option>
      </select>
    </div>

    <LegendDisplay id="legend" />

    <div class="input big" id="locations">
      <fieldset>
        <legend>Locations to include</legend>
        <div id="stashes" class="stashes">
          <div class="stash" v-show="character.name">
            <input
              type="checkbox"
              class="stash-checkbox"
              id="inventory"
              v-model="stashes"
              :value="character.name + '-inv'"
            />
            <label for="inventory" class="checkbox" checked>Character Inventory</label>
          </div>
          <div v-for="tab in stashTabs" :key="tab.id" class="stash">
            <input
              type="checkbox"
              class="stash-checkbox"
              :id="tab.n"
              v-model="stashes"
              :value="tab.i"
            />
            <label :for="tab.n" class="checkbox">{{ tab.n }}</label>
          </div>
        </div>
      </fieldset>
      <button type="button" @click="getItems" :disabled="!canLoadMaps">{{mapLoadingText}}</button>
      <div class="note" id="notes">
        Note: Clicking 'Load Maps' will overwrite the checkboxes in the 'Have' column.
        <br />
        <b>Also Note</b>: Premium 'Maps' stash tabs currently don't return any information. GGG plz.
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../APIService.js";
import LegendDisplay from "./LegendDisplay";
import AccountInformation from "./AccountInformation";

export default {
  name: "CharacterSelection",
  components: {
    LegendDisplay,
    AccountInformation
  },
  data() {
    return {
      characters: [],
      character: "--Select a character--",
      stashes: [],
      stashTabs: [],
      foundMaps: [],
      api: null,
      errorMessage: "",
      characterLoading: false,
      mapsLoading: false
    };
  },
  methods: {
    async characterChanged() {
      while (this.stashes.find(s => s.toString().includes("-inv"))) {
        const invIndex = this.stashes.findIndex(s =>
          s.toString().includes("-inv")
        );

        if (invIndex > -1) {
          this.stashes.splice(invIndex, 1);
        }
      }

      localStorage.setItem("character", JSON.stringify(this.character));
      localStorage.setItem("stashes", JSON.stringify(this.stashes));

      try {
        const tabs = await this.api.getStashes(this.character.league);
        const displayTabs = tabs.filter(t => tabsForDisplay(t));

        this.stashTabs = displayTabs;
        localStorage.setItem("stashTabs", JSON.stringify(this.stashTabs));
      } catch (error) {
        this.errorMessage = error.response;
      }
    },

    addMaps(result) {
      if (result.data) {
        let items;

        // treat response from inventory differently
        // inventory calls respond with information about character
        // stash calls don't
        items = result.data.items ? result.data.items : result.data;

        const maps = items.filter(
          i => i.category.maps && i.typeLine.includes("Map")
        );

        this.foundMaps = this.foundMaps.concat(maps);
      }
    },

    async getCharacters(data) {
      if (!data.accountName) {
        this.errorMessage = "You must enter an account name.";
        return;
      }

      if (!data.sessionId) {
        this.errorMessage = "You must enter a POESESSID.";
        return;
      }

      this.api = new Api(data.accountName, data.sessionId);
      this.stashes = [];
      this.stashTabs = [];
      this.character = "--Select a character--";
      this.characters = [];
      this.errorMessage = "";
      this.characterLoading = true;

      localStorage.removeItem("stashes");
      localStorage.removeItem("stashTabs");

      try {
        const characters = await this.api.getCharacters();
        this.characters = characters;
        this.character = characters.find(c => c.lastActive);

        localStorage.setItem("sessionId", data.sessionId);
        localStorage.setItem("accountName", data.accountName);
        localStorage.setItem("characters", JSON.stringify(this.characters));
        localStorage.setItem("character", JSON.stringify(this.character));

        const tabs = await this.api.getStashes(this.character.league);
        const displayTabs = tabs.filter(t => tabsForDisplay(t));

        this.stashTabs = displayTabs;
        localStorage.setItem("stashTabs", JSON.stringify(this.stashTabs));
      } catch (error) {
        const errorUrl = error.request.responseURL;
        if (errorUrl.includes("characters")) {
          this.errorMessage =
            "Error retrieving characters.  Confirm your POESESSID and account name are correct.";

          localStorage.setItem("characters", JSON.stringify(this.characters));
          localStorage.setItem("character", JSON.stringify(this.character));
          localStorage.setItem("stashTabs", JSON.stringify(this.stashTabs));
        } else if (errorUrl.includes("stashes")) {
          this.errorMessage =
            "Error retrieving stashes.  Confirm your account name is correct.";
        }
      } finally {
        this.characterLoading = false;
      }
    },

    async getItems() {
      this.foundMaps = [];
      this.errorMessage = "";
      this.mapsLoading = true;

      try {
        const items = await this.api.getItems(this.character, this.stashes);
        items.forEach(r => this.addMaps(r));

        this.$emit("items-loaded", this.foundMaps);
        localStorage.setItem("stashes", JSON.stringify(this.stashes));
      } catch (error) {
        this.errorMessage = error.response;
      } finally {
        this.mapsLoading = false;
      }
    },

    setApi(api) {
      this.api = api;
    }
  },
  created() {
    const characters = JSON.parse(localStorage.getItem("characters"));
    const character = JSON.parse(localStorage.getItem("character"));
    const stashTabs = JSON.parse(localStorage.getItem("stashTabs"));
    const stashes = JSON.parse(localStorage.getItem("stashes"));

    if (characters) {
      this.characters = characters;
    }

    if (character) {
      this.character = character;
    }

    if (stashTabs) {
      this.stashTabs = stashTabs;
    }

    if (stashes) {
      this.stashes = stashes;
    }
  },
  computed: {
    mapLoadingText() {
      return this.mapsLoading ? "Loading..." : "Load Maps";
    },

    canLoadMaps() {
      return !this.mapsLoading && this.api !== null;
    }
  }
};

function tabsForDisplay(tab) {
  return (
    tab.type !== "CurrencyStash" &&
    tab.type !== "FragmentStash" &&
    tab.type !== "DivinationCardStash" &&
    tab.type !== "EssenceStash"
  );
}
</script>

<style>
label.text {
  display: block;
  padding-top: 5px;
}

label.checkbox {
  padding-left: 2px;
}

input[type="text"] {
  width: 200px;
}

button {
  margin-top: 5px;
  float: right;
}

#stashes {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(8, 20px);
  grid-template-columns: repeat(auto-fill, min-content);
}

#locations {
  grid-area: locations;
}

#account {
  grid-area: account;
}

#legend {
  grid-area: legend;
  align-self: top;
  justify-self: left;
}

#characters {
  grid-area: characters;
  justify-self: left;
}

.stash {
  margin: 2px;
}

div.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 93px 1fr;
  grid-template-areas:
    "account characters locations"
    "account legend locations";
  justify-items: center;
  width: 100%;
}

div.input {
  padding: 10px;
}

div.note {
  margin-top: 5px;
  margin-left: 20px;
}

a {
  font-size: 8pt;
}

input[type="checkbox"].stash-checkbox {
  transform: scale(1.25);
}
</style>
