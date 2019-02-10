import axios from 'axios';

class APIService {

  constructor(accountName, sessionId) {
    this.accountName = accountName;
    this.sessionId = sessionId;
    this.promises = [];

    this.request = axios.create({
      baseURL: process.env.VUE_APP_API + '/api/' + this.accountName
    });
  }

  async getCharacters () {
    const path = 'characters';
    
    const response = await this.request.get(path, {
      params: {
        sessionId: this.sessionId
      }
    });

    return response.data;
  }

  async getStashes (league) {
    const path = 'stashes';

    const response = await this.request.get(path, {
      params: {
        league: league,
        sessionId: this.sessionId
      }
    });

    return response.data.tabs;
  }

  async getItems (character, stashes) {
    this.promises = [];
    const path = 'stashes';

    if (stashes.includes(character.name + '-inv')) {
      this.getInventory(character);
    }

    stashes.forEach(id => {
      // filter out the 'inv' entry and handle separately
      const parsedId = parseInt(id);
      
      if (!isNaN(parsedId)) {
        this.promises.push(this.request.get(path + '/' + parsedId, {
          params: {
            league: character.league,
            sessionId: this.sessionId
          }
        }));
      }
    }); 
    
    const items = await axios.all(this.promises);

    return items;
  }

  getInventory (character) {
    const path = 'characters/' + character.name;
    
    this.promises.push(this.request.get(path, {
      params: {
        sessionId: this.sessionId
      }
    }));
  }
  
}

export default APIService;
