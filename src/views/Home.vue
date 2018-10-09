<template>
  <main>
    <router-link to="/catalogue" tag="div" class="hero-image">
      <div class="hero">
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
  border: 1px solid black;
  cursor: pointer;
  transition: 250ms ease-in;
}
.hero-image:hover {
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 250ms ease-in;
}
</style>
