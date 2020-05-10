/* eslint-disable no-undef */

export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    // console.log(to.path);
    if (to.path === '/') {
      app.store.commit('updateLoading', true);
      next();
    } else if (!liff.id) {
      // console.log(liff.id);
      next('/');
    } else {
      next();
    }
  });
};
