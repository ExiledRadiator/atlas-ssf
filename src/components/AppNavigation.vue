<template>
  <div id="router-nav">
    <router-link to="/">Atlas Progress</router-link>
    <router-link to="/div-cards">Divination Cards</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
