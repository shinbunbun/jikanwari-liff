/* eslint-disable no-undef */

export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (to.path === '/') {
      app.store.commit('updateLoading', true);
      next();
    } else {
      try {
        liff.isLoggedIn();
      } catch (e) {
        console.log(e);
        location.href = '/';
      }
      next();
    }
  });
};
