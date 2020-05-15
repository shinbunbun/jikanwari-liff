/* eslint-disable no-undef */

export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (to.path === '/' || to.path === '/login') {
      app.store.commit('updateLoading', true);
      console.log(12);
      next();
    } else if (!liff.id) {
      // console.log(liff.id);
      next('/');
    } else {
      next();
    }
  });
};
