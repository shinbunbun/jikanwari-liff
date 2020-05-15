import Vuex from 'vuex';

const state = () => ({
  jikanwari: '',
  loading: true,
  isLoggedIn: false
});

const mutations = {
  setJikanwari(state, jikanwari) {
    state.jikanwari = jikanwari;
  },
  updateLoading(state, value) {
    state.loading = value;
  },
  updateIsLoggedIn(state, value) {
    state.isLoggedIn = value;
  }
};

const getters = {
  isLoading: (state) => {
    return state.loading;
  },
  getJikanwari: (state) => {
    return state.jikanwari;
  },
  getIsLoggedIn: (state) => {
    return state.isLoggedIn;
  }
};

const store = () => new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
