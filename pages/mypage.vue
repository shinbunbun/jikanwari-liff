<template>
  <v-container column justify-center align-center>
    <v-row class="text-center">
      <v-col>
        <p style="font-size: 30px">マイページ</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6" md="3">
        <v-card>
          <br />
          <v-row>
            <v-col />
            <v-avatar size="120">
              <v-img class="card-img-top profile-img mx-auto" :src="pictureUrl" alt="カードの画像" />
            </v-avatar>
            <v-col />
          </v-row>
          <v-card-title>
            <p v-text="displayName" />
          </v-card-title>
          <v-card-text>
            <div class="text--primary">
              <p class="card-text" v-text="memberStatus" />
              <p>
                会員ID：
                <span v-text="userId" />
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable no-undef */
export default {
  components: {
  },
  data () {
    return {
      displayName: 'displayName',
      userId: 'userId',
      pictureUrl: '',
      memberStatus: 'memberStatus',
      premiumPeriod: '',
      trainName: '',
      postalCode: '',
      jikanwariNotify: ''
    }
  },
  mounted() {
    liff.getProfile()
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
      })
  }
}
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
