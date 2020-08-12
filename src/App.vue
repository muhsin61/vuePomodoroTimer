<template>
  <div id="app">
    Podomoro
    <div id="nav">
      <router-link to="/">Podomoro</router-link> |
      <router-link to="/shortBreak">Short Break</router-link> |
      <router-link to="/longBreak">Long Break</router-link>
    </div>
    <router-view />
    <footer>2 Podomoro</footer>
  </div>
</template>
<script>
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "App",
  watch:{
    $route(){
        alert("test" + this.$route)
        console.log(this.$route.path)
    }
} 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
