import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData : {
      email: '',
      name: '',
      id:''
    }
  },
  mutations: {
    setUserData(state, payload){
      state.userData.email = payload.email
      state.userData.name = payload.name
      state.userData.id = payload.id
    }
  },
  actions: {
    setUserData({commit}, payload){
      commit('setUserData', payload)
    }
  },
  modules: {}
});
