import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: "10",
    times: 1,
    new: false,
    onWorking: false,
    reset: "long"
  },
  mutations: {
    say: (state) => {
      console.log("çalıştı");
      let timer = 60 * state.times
        //minutes,
        //seconds;
        state.new =false
        state.onWorking = true
        let deger = window.setInterval(() => {
          timer = timer - 1
          state.time = timer
          /*minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
          
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          
          state.time= minutes + ":" + seconds;*/
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
