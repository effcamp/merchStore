<template>
  <div class="merch-item">
    <div class="image">
      <img :src="merchItem.image" alt="shirt">
    </div>
      
    <h2>{{ merchItem.itemName }}</h2>
    <p>${{ merchItem.price }}</p>
    <ul class="sizes">
      <li v-for="(size, key) of merchItem.sizes" :key="merchItem.id+''+key"> {{ key }}: {{ size}}</li>
    </ul>
    <button @click="addToCart(merchItem)">Add to Cart</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['merchItem'],
  data: ()=>({
  }),
  methods:{
    ...mapActions(['addToCart'])
  }
  }
</script>

<style>
.merch-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image img {
  max-width: 150px;
  margin-top: 10px;
}
.sizes {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
</style>
