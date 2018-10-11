<template>
  <main>
    <cart-item v-for="item in itemsInCart" :key="item.id" :item="item" class="cart-item"></cart-item>
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

<style scoped>
/* main {
  display: flex;
} */
</style>
