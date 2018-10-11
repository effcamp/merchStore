<template>
  <div class="cart-item">
    <img :src="filterMerch.image" alt="">
    <h1>{{filterMerch.itemName}} Quantity - {{ item.quantity}}</h1>
    <p>{{roundPrice}}</p>
    <button @click="addToCart(item)">Add One</button>
    <button @click="removeOne(item)">Remove One</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import merchItems from '../assets/items.js';
export default {
  data: () =>({
    
  }),
  props: ['item'],
  methods:{
    ...mapActions(['removeOne', 'addToCart'])
  },
  computed: {
    filterMerch () {
        return merchItems.filter((i)=> i.id === this.item.id)[0]
    },
    roundPrice () {
        return Math.round(this.filterMerch.price * this.item.quantity * 100)/100
    }
  }
}
</script>

<style>
.cart-item {
  display: flex;
  height: 150px;
}
.cart-item img {
  height: 100%;
}
.cart-item button {
  height: 24px;
}
</style>
