/* eslint-disable no-undef */
export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    console.log('test');
    next();
  });
};
