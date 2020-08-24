import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: "10",
    times: 60,
    new: false,
    onWorking: false,
    reset: "long",
    onCounter: 0
  },
  mutations: {
    say: (state) => {
      let timer = state.times
        //state.new =false
        //state.onWorking = true
        console.log(state.timer)
        let deger = window.setInterval(() => {
          timer = timer - 1
          state.times = timer
          state.time = timer
          console.log(state.new)
        if (timer <= 0) {
          //timer = duration;
          window.clearInterval(deger)
          alert("alarm")
        }
        if(state.new){
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
