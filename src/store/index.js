import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: "10",
    times: 0,
    new: false
  },
  mutations: {
    say: () => {
      //state.new = false;
      //let timer = 60 * state.times,
      // minutes,
      //seconds;
      function doSetTimeout(i) {
        setTimeout(function() { console.log(i); }, 1000);
      }
      
      for (var i = 1; i <= 7; ++i)
        doSetTimeout(i);

      /*
      function sayac() {
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
        if(state.new){
          state.new = false;
        }

      }*/
    }
  },
  actions: {
  },
  modules: {
  }
})
