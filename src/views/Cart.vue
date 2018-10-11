<template>
  <main>
    <div class="cart-content">
      <p class="cart-content__empty" v-if="itemsInCart.length === 0">No Items in your cart!</p>
      <cart-item v-for="item in itemsInCart" :key="item.id" :item="item" class="cart-item"></cart-item>
    </div>
  </main>
</template>

<script>
import CartItem from '../components/CartItem';
import {mapGetters} from 'vuex';
export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(['itemsInCart'])
    }
  }

</script>

<style>

.cart-content {
  border: 1px solid red;
  min-height: 300px;
}

.cart-content__empty {
  padding: 100px;
}
</style>
