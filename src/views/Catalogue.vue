<template>
  <main>
    <div>Catalogue</div>
    <input type="text" v-model="search">
    {{ search }}
    <div class="merch-container">
      <merch-item v-for="item in filterSearch" :key="item.id" :merch-item="item" class="merch-item" ></merch-item>
    </div>
  </main> 
</template>

<script>
import MerchItem from '../components/MerchItem'
import merch from '../assets/items.js'
export default {
  components:{
    "merch-item": MerchItem
  },
  data: ()=>({
    merch,
    search:"",
  }),
 
  computed:{
    filterSearch(){ 
      return this.merch.filter((item)=>{
        return item.itemName.toLowerCase().match(this.search);
        })
      }
  }
}
</script>

<style>
.merch-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 5px;
  justify-content: center;
  margin-top: 15px;
}

.merch-item {
}
</style>
