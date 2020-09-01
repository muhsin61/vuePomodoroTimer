<template>
  <div class="hello">
    <p>
      this is time
    </p>
    <h1>
      {{ Math.trunc($store.state.time / 60) }}:{{ $store.state.time % 60 }}
    </h1>
    <div class="buttons">
      <button v-if="$store.state.onWorking" @click="onWorking">Stop</button>
      <button v-else @click="stop">Start</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    reset() {
      if (this.$store.state.reset == "long") {
        this.$store.state.new = true;
      }
    },
    onWorking() {
      this.$store.state.new = true;
      this.$store.state.onWorking = false;
    },
    stop() {
      this.$store.state.new = false;
      this.$store.state.onWorking = true;
      this.$store.commit("say");
    },
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
