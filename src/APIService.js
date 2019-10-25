import axios from "axios";

class APIService {
  constructor(accountName, sessionId) {
    this.accountName = accountName;
    this.sessionId = sessionId;
    this.promises = [];

    this.request = axios.create({
      baseURL: process.env.VUE_APP_API + "/api/" + this.accountName
    });
  }

  async getCharacters() {
    const path = "characters";

    const response = await this.request.get(path, {
      params: {
        sessionId: this.sessionId
      }
    });

    return response.data;
  }

  async getStashes(league) {
    const path = "stashes";

    const response = await this.request.get(path, {
      params: {
        league: league,
        sessionId: this.sessionId
      }
    });

    return response.data.tabs;
  }

  async getItems(character, allStashes) {
    this.promises = [];
    const path = "stashes";
    const stashes = allStashes.slice();

    let invIndex = stashes.indexOf(character.name + "-inv");
    if (invIndex >= 0) {
      stashes.splice(invIndex, 1);
      this.getInventory(character);
    }

    stashes.forEach(id => {
      // filter out the 'inv' entry and handle separately
      const parsedId = parseInt(id);

      if (!isNaN(parsedId)) {
        const requestPath = path + "/" + parsedId;
        const stashRequest = this.request.get(requestPath, {
          params: {
            league: character.league,
            sessionId: this.sessionId
          }
        });

        this.promises.push(stashRequest);
      }
    });

    const items = await axios.all(this.promises);
    return items;
  }

  getInventory(character) {
    const path = "characters/" + character.name;

    this.promises.push(
      this.request.get(path, {
        params: {
          sessionId: this.sessionId
        }
      })
    );
  }
}

export default APIService;
