<template>
  <header>
    <nav>
      <h1>Merchstore</h1>
      <ul>
        <li>Cart</li>
        <li>Log out</li>
        <li>Log in</li>
        <li>Create Account</li>
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
