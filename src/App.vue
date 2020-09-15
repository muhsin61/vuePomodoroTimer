<template>
  <div id="app">
    Podomoro
    <div id="nav">
      <router-link to="/">Podomoro</router-link>|
      <router-link to="/shortBreak">Short Break</router-link>|
      <router-link to="/longBreak">Long Break</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  watch: {
    $route() {
      let route = this.$route.path;
      this.$store.state.new = true;
      if (route === "/") {
        this.$store.state.new = true;
        this.$store.state.times = 25 * 60;
        this.$store.state.time = 1500; //25 minutes
        if (this.$store.state.onWorking) {
          this.$store.state.new = true;
          this.$store.state.onWorking = false;
        }
      }
      if (route === "/shortBreak") {
        this.$store.state.new = true;
        this.$store.state.times = 5 * 60;
        this.$store.state.time = 300; //5 minutes
        if (this.$store.state.onWorking) {
          this.$store.state.new = true;
          this.$store.state.onWorking = false;
        }
      }
      if (route === "/longBreak") {
        this.$store.state.new = true;
        this.$store.state.times = 15 * 60;
        this.$store.state.time = 600; //10 minutes
        if (this.$store.state.onWorking) {
          console.log("neden true: " + this.$store.state.onWorking);
          this.$store.state.new = true;
          this.$store.state.onWorking = false;
        }
      }
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  background: transparent;
  padding: 10px;
  border: none;
  border: #42b983 2px solid;
  margin: 3px;
  border-radius: 5px;
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
