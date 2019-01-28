<template>
  <div class="inputs">
    <div class="input">
      <label for="sessionId">POESESSID</label>
      <input type="text" placeholder="0e6c4a14d10240be23a4d6bb265accaa" id="sessionId" v-model="sessionId">
    </div>
    <div class="input">
      <label for="accountName">Account Name</label>
      <input type="text" placeholder="account name" id="accountName" v-model="accountName">
    </div>
    <button type="button" @click="loadCharacters" class="input">Load Characters</button>
    <div class="input">
      <label for="accountName">Locations to include</label>
      <input type="text" placeholder="account name" id="accountName" v-model="accountName">
    </div>
    <button type="button" @click="getMaps" class="input">Load Maps</button>
    <div v-for="character in characters">{{ character.name }} ({{ character.league }})</div>
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
    }
  },
  methods: {
    getMaps (event) {
       // https://www.pathofexile.com/character-window/get-characters
      // in header, set POESESSID=0e6c4a14d10240be23a4d6bb265accaa with key=Cookie
      // form data/ params:  accountName

      // GET https://www.pathofexile.com/character-window/get-stash-items?accountName=radiator&tabIndex=0&league=Betrayal

      // POST https://www.pathofexile.com/character-window/get-items
      // form data:  accountName, character
      // returns items[]
      // items.filter(i => i.inventoryId === "MainInventory")
      // .filter(i => i.category.maps)
      return;
    },

    loadCharacters () {
      const url = '/get-characters';
      
      const requestBody = {
        accountName: this.accountName,
      };

      const config = {
        headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US, en;q=0.5',
          'Connection': 'keep-alive',
          'Cookie': 'POESESSID=' + this.sessionId,
          'DNT': '1',
          'Host': 'www.pathofexile.com',
        },
        withCredentials: true,
        params: {
          accountName: this.accountName
        }
      };

      axios.get(url, config)
      .then(response => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error);
        console.log(error.status);
        console.log(error.code);
      });
    }
  }
}
</script>

<style>
label {
  display: block;
}

div.inputs {
  display: inline-flex;
  justify-content: center;
  width: 50%;
  padding: 5px;
}

div.input {
  margin: 5px;
}
</style>
