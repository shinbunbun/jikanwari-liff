import Vuex from 'vuex';

const state = () => ({
  jikanwari: '',
  loading: true
});

const mutations = {
  setJikanwari(state, jikanwari) {
    state.jikanwari = jikanwari;
  },
  updateLoading(state, value) {
    state.loading = value;
  }
};

const getters = {
  isLoading: (state) => {
    return state.loading;
  },
  getJikanwari: (state) => {
    return state.jikanwari;
  }
};

const store = () => new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
