<template>
  <div class="div-card">
    <span><img :src="card.icon"></span>
    <span>{{ card.typeLine }}</span>
    <span><img class="currency" :src="chaosIcon"></span>
    <span>{{ card.chaosValue }}</span>
  </div>
</template>

<script>
export default {
  name: 'DivinationCard',
  props: ['card'],

  /**
   * card properties of interest
   * id - unique id for the item
   * typeLine - name of the card
   * stackSize
   * maxStackSize
   * icon - image icon
   */
  data () {
    return {
      chaosIcon: 'https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?scale=1&w=1&h=1',
    }
  },
}
</script>

<style scoped>
img.currency {
  width: 35px;
  height: auto;
}

div {
  justify-content: center;
}
</style>
