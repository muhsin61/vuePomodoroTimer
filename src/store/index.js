import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: "10",
    times: 0
  },
  mutations: {
    say: (state) => {
      let timer = 60 * state.times,
       minutes,
       seconds;
      clearInterval(sayac);
      sayac();
      function sayac() {
        console.log("sayı")
        /*for (let i = 60; i < 0; i = i - 1) {
          setTimeout(() => {
            console.log(i)
          }, 1000);
        }*/

        setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          let times = minutes + ":" + seconds;
          state.time = times
          console.log(times)
          if (--timer < 0) {
            alert("alarm")
            //timer = 60 * state.times;
          }
        }, 1000);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
