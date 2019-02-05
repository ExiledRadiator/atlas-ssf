import axios from 'axios';

class APIService {

  constructor(accountName, sessionId) {
    this.accountName = accountName;
    this.sessionId = sessionId;
    this.promises = [];

    this.request = axios.create({
      baseURL: process.env.VUE_APP_API + '/api'
    });
  }

  async getCharacters () {
    const path = 'characters';
    const body = new FormData();
    
    body.set('accountName', this.accountName);
    body.set('sessionId', this.sessionId);
    
    const response = await this.request.post(path, body); 

    return response.data;
  }

  async getStashes (league) {
    const path = 'stashes';

    const response = await this.request.get(path, {
      params: {
        accountName: this.accountName,
        sessionId: this.sessionId,
        league: league,
        tabs: 1
      }
    });

    return response.data.tabs;
  }

  async getItems (character, stashes) {
    this.promises = [];
    const path = 'stashes';

    if (stashes.includes('inv')) {
      this.getInventory(character);
    }

    stashes.forEach(id => {
      // filter out the 'inv' entry and handle separately
      const parsedId = parseInt(id);
      
      if (!isNaN(parsedId)) {
        this.promises.push(this.request.get(path, {
          params: {
            accountName: this.accountName,
            sessionId: this.sessionId,
            league: character.league,
            tabs: 0,
            tabIndex: parsedId
          }
        }));
      }
    }); 
    
    const items = await axios.all(this.promises);

    return items;
  }

  getInventory (character) {
    const url = 'items';
    const body = new FormData();

    body.set('accountName', this.accountName);
    body.set('sessionId', this.sessionId);
    body.set('character', character.name);
    
    this.promises.push(this.request.post(url, body))
  }
  
}

export default APIService;