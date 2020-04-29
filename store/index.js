import Vuex from 'vuex';

const state = () => ({
  jikanwari: ''
});

const mutations = {
  setJikanwari(state, jikanwari) {
    state.jikanwari = jikanwari;
  }
};

const store = () => new Vuex.Store({
  state,
  mutations
});

export default store;
