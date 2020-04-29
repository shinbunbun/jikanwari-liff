/* eslint-disable no-undef */
export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    if (from.path === '/') {
      next();
    } else {
      try {
        liff.isLoggedIn();
      } catch (e) {
        console.log(e);
        next('/');
      }
      next();
    }
  });
};
