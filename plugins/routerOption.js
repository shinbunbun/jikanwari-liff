/* eslint-disable no-undef */
export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    try {
      liff.isLoggedIn();
    } catch (e) {
      console.log(e);
      next('/');
    }
    next();
  });
};
