/* eslint-disable no-undef */
export default ({
  app
}) => {
  app.router.beforeEach((to, from, next) => {
    liff
      .init({
        liffId: '1653817317-4d9a9bwY' // use own liffId
      })
      .then(() => {
        // Start to use liff's api
        if (!liff.isLoggedIn()) {
          liff.login()
        }
      })
      .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message)
        alert('エラーが発生しました')
      })
    console.log('test')
    next()
  })
}
