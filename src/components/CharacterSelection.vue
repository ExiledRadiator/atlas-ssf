<template>
  <div class="inputs">
    <div class="input" id="account">
      <fieldset>
        <legend>Account Information</legend>
        <label for="sessionId" class="text">POESESSID <a href="what-is-a-session-id.html">What's this?</a></label>
        <input type="text" placeholder="0e6c4a14d10240be23a4d6bb265accaa" id="sessionId" v-model="sessionId">

        <label for="accountName" class="text">Account Name</label>
        <input type="text" placeholder="account name" id="accountName" v-model="accountName">
      </fieldset>
      
      <button type="button" @click="getCharacters" class="input">Load Characters</button>
    </div>

    <div class="input" id="characters">
      <label for="characterList" class="text">Characters</label>
      <select v-model="character" @change="characterChanged" id="characterList">
        <option disabled>--Select a character--</option>
        <option v-for="character in characters" :value="character">
          {{ character.name }} ({{ character.league }})
        </option>
      </select>
    </div>

    <LegendDisplay id="legend" />
    
    <div class="input big" id="locations">
      <fieldset>
        <legend>Locations to include</legend>
        <div id="stashes" class="stashes">
          <div class="stash" v-show="character.name">
            <input type="checkbox" class="stash-checkbox" id="inventory" v-model="stashes" value="inv">
            <label for="inventory" class="checkbox" checked>Character Inventory</label>
          </div>
          <div v-for="tab in stashTabs" :key="tab.id" class="stash">
            <input type="checkbox" class="stash-checkbox" :id="tab.n" v-model="stashes" :value="tab.i">
            <label :for="tab.n" class="checkbox">{{ tab.n }}</label>
          </div>
        </div>
      </fieldset>
      <button type="button" @click="getItems" class="input">Load Maps</button>
      <div class="note" id="notes">
          Note: Clicking 'Load Maps' will overwrite the checkboxes in the 'Have' column.<br />
          <b>Also Note</b>: Premium 'Maps' stash tabs currently don't return any information.  GGG plz.
      </div>
    </div>
  </div>
</template>

<script>
import Api from '../APIService.js'
import LegendDisplay from './LegendDisplay'

export default {
  name: 'CharacterSelection',
  components: {
    LegendDisplay,
  },
  data () {
    return {
      sessionId: '',
      accountName: '',
      characters: [],
      character: '--Select a character--',
      stashes: ['inv'],
      stashTabs: [],
      foundMaps: [],
      api: null
    }
  },
  methods: {
    characterChanged () {
      localStorage.setItem('character', JSON.stringify(this.character));
      
      this.api.getStashes(this.character.league)
      .then(tabs => {
        this.stashTabs = tabs;
        localStorage.setItem('stashTabs', JSON.stringify(this.stashTabs));
      })
      .catch(error => {
        // handle error
        console.log(error.response);
      });
    },

    addMaps (result) {          
      if (result.data) {
        let items;
        
        // treat response from inventory differently
        // inventory call responds with information about character
        // stash calls don't
        if (result.data.character) {
          items = result.data.items.filter(i => i.inventoryId === "MainInventory");
        }
        else {
          items = result.data.items;
        }

        const maps = items.filter(i => i.category.maps && i.typeLine.includes("Map"));
        this.foundMaps = this.foundMaps.concat(maps);
      }
    },

    getCharacters () {
      this.api = new Api(this.accountName, this.sessionId);
      
      this.api.getCharacters()
      .then(characters => {
        this.characters = characters;
        this.character = characters.find(c => c.lastActive);

        localStorage.setItem('sessionId', this.sessionId);
        localStorage.setItem('accountName', this.accountName);
        localStorage.setItem('characters', JSON.stringify(this.characters));
        localStorage.setItem('character', JSON.stringify(this.character));
      })
      .then(() => this.api.getStashes(this.character.league))
      .then(tabs => {
        this.stashTabs = tabs;
        localStorage.setItem('stashTabs', JSON.stringify(this.stashTabs));
      })
      .catch(error => {
        const errorUrl = error.request.responseURL;

        if (errorUrl.includes('/api/characters')) {
          console.log('Error retrieving characters.  Confirm your POESESSID and account name');
          this.characters = [];
          this.character = '--Select a character--';
          this.stashTabs = [];

          localStorage.setItem('characters', JSON.stringify(this.characters));
          localStorage.setItem('character', JSON.stringify(this.character));
          localStorage.setItem('stashTabs', JSON.stringify(this.stashTabs));
        }
        else if (errorUrl.includes('/api/stashes')) {
          console.log('Error retrieving stashes.  Confirm your account name is correct.');          
        }
      });
    },

    getItems () {
      this.foundMaps = [];

      this.api.getItems(this.character, this.stashes)
      .then(results => {
        results.forEach(r => this.addMaps(r));
        this.$emit('items-loaded', this.foundMaps);
        localStorage.setItem('stashes', JSON.stringify(this.stashes));
      })
      .catch(error => {
        // handle error
        console.log(error);        
      });
    }
  },
  created () {
    const sessionId = localStorage.getItem('sessionId');
    const accountName = localStorage.getItem('accountName');
    const characters = JSON.parse(localStorage.getItem('characters'));
    const character = JSON.parse(localStorage.getItem('character'));
    const stashTabs = JSON.parse(localStorage.getItem('stashTabs'));
    const stashes = JSON.parse(localStorage.getItem('stashes'));

    if (sessionId) {
      this.sessionId = sessionId;
    }

    if (accountName) {
      this.accountName = accountName;
    }

    if (characters) {
      this.characters = characters;
    }

    if (character) {
      this.character = character;
    }

    if (stashTabs) {
      this.stashTabs = stashTabs;
    }

    if (!this.api) {
      if (this.sessionId && this.accountName) {
        this.api = new Api(this.accountName, this.sessionId);
      }
    }

    if (stashes) {
      this.stashes = stashes;
    }
  }
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

#sessionId {
  font-size: 8pt;
}

a {
  font-size: 8pt;
}

input[type=checkbox].stash-checkbox {
  transform: scale(1.25);
}
</style>
