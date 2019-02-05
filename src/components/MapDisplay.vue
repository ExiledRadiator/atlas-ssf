<template>
  <span>
    <span v-if="hasMap" class="dot icon"></span>
    <span v-if="mapCount >= 3" class="icon">&#8593;</span>
    <span>{{ mapName }}</span><span v-if="addComma">, </span>
  </span>
</template>

<script>
export default {
  name: 'MapDisplay',
  props: {
    length: { type: Number, required: true },
    mapName: { type: String, required: true },
    index: { type: Number, required: true },
    hasMap: { type: Boolean, required: true },
    mapCount: {type: Number, required: true }
  },
  computed: {
    addComma () {
      return (this.index + 1 < this.length)
    }
  }
}
</script>

<style>
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
</style>
