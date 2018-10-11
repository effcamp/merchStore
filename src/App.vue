<template>
  <div id="app">
   
    <app-header class="header"></app-header>
    <router-view class="main-container" />
 
    <app-footer class="footer"></app-footer>
  </div>
</template>
<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  components:{
    appHeader: Header,
    appFooter: Footer
  },
  data: () => ({
    title: "Hello",
    
  })
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c5dbe2;
  background: #028090;
  min-height: 100vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.main-container {
  max-width: 1200px;
  margin: 20px auto;
}
.header {
  background: #114b5f;
}
</style>
// https://coolors.co/114b5f-028090-c5dbe2-e4fde1-086b8c