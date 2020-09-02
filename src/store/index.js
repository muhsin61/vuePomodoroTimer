import Vue from "vue";
import Vuex from "vuex";
import Push from "push.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    time: 1500,
    times: 1500,
    new: false,
    onWorking: false,
    onCounter: 0,

  },
  mutations: {
    say: (state) => {
      if (state.new) {
        window.clearInterval(deger);
      }
      let timer = state.times;
      state.new = false;
      console.log(state.timer);
      let deger = window.setInterval(() => {
        timer = timer - 1;
        state.times = timer;
        state.time = timer;
        console.log(state.new);
        if (timer <= 0) {
          window.clearInterval(deger);
          Push.create("Heyyy!", {
            body: "Yor time is over'?",
            icon: '/icon.png',
            timeout: 4000,
            onClick: function () {
              window.focus();
              this.close();
            }
          });
        }
        if (state.new) {
          console.log("true dönüyor");
          window.clearInterval(deger);
        }
      }, 1000);
    },
  },
  actions: {},
  modules: {},
});
