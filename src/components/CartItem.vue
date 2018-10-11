<template>
  <div class="cart-item">
    <img :src="filterMerch.image" alt="">
    <h1>{{filterMerch.itemName}} Quantity - {{ item.quantity}}</h1>
    <p>{{roundPrice}}</p>
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
    ...mapActions(['removeOne'])
  },
  computed: {
    filterMerch () {
        return merchItems.filter((i)=> i.id === this.item.id)[0]
    },
    roundPrice () {
        return this.filterMerch.price * this.item.quantity
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
