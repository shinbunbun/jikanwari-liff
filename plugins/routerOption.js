/* eslint-disable no-undef */
export default ({
  app
}) => {
  app.router.afterEach((to, from, next) => {
    try {
      liff.isLoggedIn();
    } catch (e) {
      console.log(e);
      next('/');
    }
  });
};
