<template>
  <div class="inputs">
    <div class="input">
      <fieldset>
        <legend>Account Information</legend>
        <label for="sessionId" class="text">POESESSID <a href="what-is-a-session-id.html">What's this?</a></label>
        <input type="text" placeholder="0e6c4a14d10240be23a4d6bb265accaa" id="sessionId" v-model="sessionId">

        <label for="accountName" class="text">Account Name</label>
        <input type="text" placeholder="account name" id="accountName" v-model="accountName">
      </fieldset>
      
      <button type="button" @click="getCharacters" class="input">Load Characters</button>
    </div>

    <div class="input">
      <label for="characterList" class="text">Characters</label>
      <select v-model="character" @change="characterChanged" id="characterList">
        <option disabled>--Select a character--</option>
        <option v-for="character in characters" :value="character">
          {{ character.name }} ({{ character.league }})
        </option>
      </select>
    </div>
    
    <div class="input big">
      <fieldset>
        <legend>Locations to include</legend>
        <div class="stashes">
          <div class="stash">
          <input type="checkbox" class="stash-checkbox" id="inventory" v-model="stashes" value="inv">
          <label for="inventory" class="checkbox" checked>Character Inventory</label>
          </div>
          <div v-for="tab in tabs" :key="tab.id" class="stash">
            <input type="checkbox" class="stash-checkbox" :id="tab.n" v-model="stashes" :value="tab.i">
            <label :for="tab.n" class="checkbox">{{ tab.n }}</label>
          </div>
        </div>
      </fieldset>
      <button type="button" @click="getItems" class="input">Load Maps</button>
      <div class="note">
        Note: Clicking 'Load Maps' will overwite the checkboxes in the 'Have' column.
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CharacterSelection',
  data () {
    return {
      sessionId: '',
      accountName: '',
      characters: [],
      character: '--Select a character--',
      league: '',
      stashes: ['inv'],
      tabs: [],
      foundMaps: [],
      promises: []
    }
  },
  methods: {
    characterChanged () {
      localStorage.setItem('character', JSON.stringify(this.character));
      this.getStashes();
    },

    addMaps (result) {            
      if (result.data) {
        let items;
        
        // treat response from inventory differently
        if (!result.data.items[0].inventoryId.includes("Stash")) {
          items = result.data.items.filter(i => i.inventoryId === "MainInventory");
        }
        else {
          items = result.data.items;
        }

        const maps = items.filter(i => i.category.maps && i.typeLine.includes("Map"));
        this.foundMaps = this.foundMaps.concat(maps);
      }
    },

    getInventory () {
      const url = process.env.VUE_APP_API + '/api/items';
      
      const body = new FormData();
      body.set('accountName', this.accountName);
      body.set('sessionId', this.sessionId);
      body.set('character', this.character.name);
      
      this.promises.push(axios.post(url, body))
    },

    getItems () {
      this.foundMaps = [];
      this.promises = [];

      const baseUrl = process.env.VUE_APP_API + '/api/stashes';

      if (this.stashes.includes("inv")) {
        this.getInventory();
      }

      this.stashes.forEach(id => {
        // filter out the 'inv' entry and handle separately
        const parsedId = parseInt(id);
        
        if (!isNaN(parsedId)) {
          this.promises.push(axios.get(baseUrl, {
            params: {
              accountName: this.accountName,
              sessionId: this.sessionId,
              league: this.character.league,
              tabs: 0,
              tabIndex: parsedId
            }
          }));
        }
      }); 
      
      axios.all(this.promises)
      .then(results => {
        results.forEach(r => this.addMaps(r));
        this.$emit('items-loaded', this.foundMaps);
      });
    },

    getStashes () {   
      let baseUrl = process.env.VUE_APP_API + '/api/stashes';

      axios.get(baseUrl, {
        params: {
          accountName: this.accountName,
          sessionId: this.sessionId,
          league: this.character.league,
          tabs: 1
        }
      })
      .then(response => {
        if (response.data) {
          this.tabs = response.data.tabs;
          localStorage.setItem('stashTabs', JSON.stringify(this.tabs));
        }
      })
      .catch(error => {
        console.log(error.request);
        console.log(error.message);
        console.log(error.response.data);
      });
    },

    getCharacters () {
      const url = process.env.VUE_APP_API + '/api/characters';
      const body = new FormData();
      body.set('accountName', this.accountName);
      body.set('sessionId', this.sessionId);
    
      axios.post(url, body)
      .then(response => {
        this.characters.splice(0, this.characters.length - 1);
        if (response.data) {
          response.data.forEach(item => {
            this.characters.push(item);
            if (item.lastActive) {
              this.character = item
            }
          });
        }

        localStorage.setItem('sessionId', this.sessionId);
        localStorage.setItem('accountName', this.accountName);
        localStorage.setItem('characters', JSON.stringify(this.characters));
        localStorage.setItem('character', JSON.stringify(this.character));

        this.getStashes();
      })
      .catch(error => {
        console.log(error.request);
        console.log(error.message);
        console.log(error.response.data);
      });
    }
  },
  created () {
    const sessionId = localStorage.getItem('sessionId');
    const accountName = localStorage.getItem('accountName');
    const characters = JSON.parse(localStorage.getItem('characters'));
    const character = JSON.parse(localStorage.getItem('character'));
    const tabs = JSON.parse(localStorage.getItem('stashTabs'));

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

    if (tabs) {
      this.tabs = tabs;
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

div.stashes {
  display: flex;
  flex-wrap: wrap;
}

div.big {
  flex: 3 2 50%;
}

div.stash {
  flex: 1 0 36%;
  margin: 2px;
}

div.inputs {
  display: inline-flex;
  justify-content: center;
  width: 95%;
}

div.input {
  flex-grow: 1;
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
