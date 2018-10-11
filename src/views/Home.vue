<template>
  <main class="main-container">
    <router-link to="/catalogue" tag="div" class="hero-image">
      <div class="hero-info">
        <h1 class="hero__title">Shirts</h1>
        <p class="hero__text">Check out our cool shirts!</p>
      </div>
    </router-link>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.hero-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
  background: url("../assets/tshirt-bg.jpg");
  max-width: 500px;
  height: 400px;
  transition: 250ms ease-in;
  color: #114b5f;
}
.hero-image:hover {
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 250ms ease-in;
}
.hero-info {
  background: #c5dbe2;
  width: 40%;
  margin: auto;
}
</style>
