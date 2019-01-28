<template>
  <span>
    <span v-if="hasMap" class="dot"></span>{{ mapName }}<span v-if="addComma">, </span>
  </span>
</template>

<script>
export default {
  name: 'MapDisplay',
  props: {
    length: { type: Number, required: true },
    mapName: { type: String, required: true },
    index: { type: Number, required: true },
    hasMap: { type: Boolean, required: true }
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
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
}
</style>
