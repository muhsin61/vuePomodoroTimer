<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
    </p>
    <div id="nav">
      <router-link to="/">Podomoro</router-link> |
      <router-link to="/shortBreak">Short Break</router-link> |
      <router-link to="/longBreak">Long Break</router-link>
    </div>
    <div class="buttons">
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
