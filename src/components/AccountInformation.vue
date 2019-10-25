<template>
  <div class="account">
    <fieldset>
      <legend>Account Information</legend>
      <label for="sessionId" class="text">POESESSID <a href="what-is-a-session-id.html">What's this?</a></label>
      <input type="text" placeholder="0e6c4a14d10240be23a4d6bb265accaa" id="sessionId" v-model="sessionId">

      <label for="accountName" class="text">Account Name</label>
      <input type="text" placeholder="account name" id="accountName" v-model="accountName">
      <div id="error-message">{{ errorMessage }}</div>
    </fieldset>
    
    <button type="button" @click="loadAccount" :disabled="loading">{{ loadText }}</button>
  </div>
</template>

<script>
import Api from '../APIService.js'

export default {
  name: 'AccountInformation',
  props: ['loading', 'errorMessage'],
  data () {
    return {
      sessionId: '',
      accountName: '',
    }
  },
  methods: {
    loadAccount () {
      this.$emit('load-account', {
        sessionId: this.sessionId,
        accountName: this.accountName
      });
    }
  },
  created () {
    const sessionId = localStorage.getItem('sessionId');
    const accountName = localStorage.getItem('accountName');

    if (sessionId) {
      this.sessionId = sessionId;
    }

    if (accountName) {
      this.accountName = accountName;
    }

    if (this.sessionId && this.accountName) {
        this.$emit('api', new Api(this.accountName, this.sessionId));
    }
  },
  computed: {
    loadText () {
      return this.loading ? "Loading..." : "Load Characters";
    }
  }
}
</script>

<style scoped>
.account {
  grid-area: account;
  width: 400px;
  position: relative;
}

.account > fieldset {
  padding-bottom: 10px;
}

#sessionId {
  font-size: 8pt;
}

#error-message {
  color: red;
  font-size: 10pt;
  padding-top: 5px;
  overflow: hidden;
  white-space:normal;
}
</style>
