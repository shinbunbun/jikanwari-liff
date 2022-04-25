/* eslint-disable no-undef */

export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    const query = to.query;
    console.log(to.path);
    /* if (to.path === '/' || to.path === '/login') {
      console.log(12);
    } else  */if (to.path === '/pvy' || to.path === '/help' || to.path === '/notifyComplete' || to.path === '/update') {
      next();
      return;
    }/*  else if (!liff.id) {
      // console.log(liff.id);
      next('/');
    } else {
      next();
    } */

    switch (query.path) {
      case 'login':
        next('/login');
        break;
      case 'table':
        localStorage.setItem('path', '/table');
        next('/login');
        break;
      case 'registration':
        localStorage.setItem('path', '/registration');
        next('/login');
        break;
      case 'edit':
        localStorage.setItem('path', '/edit');
        next('/login');
        break;
      case 'mypage':
        localStorage.setItem('path', '/mypage');
        next('/login');
        break;
      case 'notifyComplete':
        next('/notifyComplete');
        break;

      default:
        next();
        break;
    }
  });
};
