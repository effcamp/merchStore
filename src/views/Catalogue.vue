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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.merch-item {
  border: 1px solid red;
  min-width: 200px;
}
</style>
