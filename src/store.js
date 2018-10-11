import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: []
  },
  getters: {
    itemsInCart: state => {
      return state.cartItems;
    }
  },
  mutations: {
    addToCart: (state, item) => {
      const i = state.cartItems.findIndex(i => i.id === item.id);
      if (i !== -1) {
        state.cartItems[i].quantity += 1;
      } else {
        state.cartItems.push({
          id: item.id,
          quantity: 1
        });
      }
    },
    removeOne: (state, item) => {
      // const temp = state.cartItems.filter((i)=> i.id === item.id);
      const i = state.cartItems.findIndex(i => i.id === item.id);

      if (state.cartItems[i].quantity > 1) {
        state.cartItems[i].quantity -= 1;
      } else {
        state.cartItems.splice(i, 1);
      }
    }
  },
  actions: {
    addToCart: ({ commit }, item) => {
      commit("addToCart", item);
    },
    removeOne: ({ commit }, item) => {
      commit("removeOne", item);
    }
  }
});
