<template>
  <div>
      <fieldset>
      <legend>Legend</legend>
      <div id="legend-details">
        <span class="dot icon symbol"></span><span>You have this map</span>
        <span class="symbol">&#8593;</span><span>You have 3 or more of this map and can use the upgrade recipe</span>
        <span class="grey symbol">Drops in</span><span>You have this map and don't need to run lower tier where it drops</span>
        <span class="grey symbol">Map name</span><span>You've completed this map</span>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'LegendDisplay'
}
</script>

<style scoped>
#legend-details {
  display: grid;
  grid-template-columns: 65px 1fr;
  font-size: 8pt;
  gap: 2px 10px;
}

.dot {
  height: 8px;
  width: 8px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}

.icon {
  margin-left: 2px;
  margin-right: 2px;
}

.grey {
  color: gray;
}

.symbol {
  justify-self: end;
}
</style>
