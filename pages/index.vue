<template>
  <div v-if="isLoggedIn">
    <LoggedInHome />
  </div>
  <div v-else>
    <NotLoggedInHome />
  </div>
</template>

<script>

import LoggedInHome from '../components/loggedInHome';
import NotLoggedInHome from '../components/notLoggedInHome';

export default {
  components: {
    LoggedInHome,
    NotLoggedInHome
  },
  data() {
    return {
      isLoggedIn: false
    };
  },
  mounted() {
    console.log(11);
    // eslint-disable-next-line no-undef
    if (liff.id) {
      this.isLoggedIn = true;
    } else {
      // eslint-disable-next-line no-undef
      liff
        .init({
          liffId: process.env.liffId // use own liffId
        })
        .then(() => {
        // eslint-disable-next-line no-undef
          if (liff.isLoggedIn()) {
            this.isLoggedIn = true;
            this.$store.commit('updateIsLoggedIn', true);
          } else {
            // eslint-disable-next-line no-undef
            this.isLoggedIn = false;
          }
        })
        .catch((err) => {
        // Error happens during initialization
          console.log(err.code, err.message);
          alert('エラーが発生しました');
          this.$store.commit('updateLoading', false);
        });
    }
  }
};
</script>
