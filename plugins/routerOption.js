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
      console.log(liff.id);
      if (!liff.id) {
        next('/');
      } else {
        next();
      }
    }
  });
};
