/* eslint-disable no-undef */

export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    const query = to.query;
    console.log(to.path);
    if (to.path === '/' || to.path === '/login') {
      console.log(12);
      next();
    } else if (to.path === '/pvy') {
      next();
    } else if (!liff.id) {
      // console.log(liff.id);
      next('/');
    } else {
      next();
    }

    switch (query.path) {
      case 'login':
        next('/');
        break;
      case 'table':
        localStorage.setItem('path', '/table');
        next('/');
        break;
      case 'registration':
        localStorage.setItem('path', '/registration');
        next('/');
        break;
      case 'edit':
        localStorage.setItem('path', '/edit');
        next('/');
        break;
      case 'mypage':
        localStorage.setItem('path', '/mypage');
        next('/');
        break;

      default:
        break;
    }
  });
};
