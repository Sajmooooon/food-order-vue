<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--  </nav>-->
<!--  <i class='bx bxl-github mr-2' ></i>-->
  <router-view/>
</template>

<script lang="ts">

</script>

<style>
body{
  min-width: fit-content;
  margin: 0;
  min-height: 100vh;
  overflow-x: auto;
  background: #f8f4f4;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  min-height: 100vh;
  width: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
