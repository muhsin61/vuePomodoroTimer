import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: "25:00",
    times: 1500,
    new: false,
    onWorking: false,
    reset: "long",
    onCounter: 0
  },
  mutations: {
    say: (state) => {
      if (state.new) {
        window.clearInterval(deger)
      }
      let timer = state.times
      state.new = false
      //state.onWorking = true
      console.log(state.timer)
      let deger = window.setInterval(() => {
        timer = timer - 1
        state.times = timer
        state.time = timer
        console.log(state.new)
        if (timer <= 0) {
          window.clearInterval(deger)
          alert("alarm")
        }
        if (state.new) {
          console.log("true dönüyor")
          window.clearInterval(deger)
        }
      }, 1000);

    }
  },
  actions: {
  },
  modules: {
  }
})
