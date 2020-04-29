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
        /* liff.getProfile()
          .then(async (profile) => {
             this.displayName = profile.displayName
            this.userId = profile.userId
            this.pictureUrl = profile.pictureUrl

            const userId = profile.userId

            const main = async () => {
              try {
                const res = await axios.request({
                  method: 'GET',
                  baseURL: `https://cshm50yn8b.execute-api.ap-northeast-1.amazonaws.com/prod/?userId=${userId}`
                })
                return res.data
              } catch (error) {
                alert('エラーが発生しました')
                return error.response.data
              }
            }
            const res = (await main()).ttdata
            console.log(res)
            if (res.ttdata === 'no') {
              alert('時間割登録を完了させて下さい')
            } else if (res.premium) {
              this.memberStatus = 'プレミアム会員'
              this.premiumPeriod = res.premiumPeriod

              if (res.train) {
                this.trainName = res.train
              } else {
                this.trainName = '路線未登録'
              }

              if (res.postalCode) {
                this.postalCode = res.postalCode
              } else {
                this.postalCode = '地域未登録'
              }

              if (res.flag && res.flag !== '25') {
                this.jikanwariNotify = `${res.flag}:00`
              } else {
                this.jikanwariNotify = '時間割お知らせ機能未登録'
              }
            } else {
              this.memberStatus = '一般会員'
            }

            this.isLoading = false
          }) */
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
