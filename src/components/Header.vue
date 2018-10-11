<template>
  <header>
    <nav>
      <h1><router-link to="/" tag="li">Merchstore</router-link></h1>
      <ul>
        <router-link to="/cart" tag="li">Cart</router-link>
        <router-link to="/logout" tag="li">Log out</router-link>
        <router-link to="/login" tag="li">Log in</router-link>
        <router-link to="/create" tag="li">Create Account</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
li {
  list-style-type: none;
  cursor: pointer;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
nav > ul {
  display: flex;
}
nav li {
  margin-left: 10px;
}
</style>
