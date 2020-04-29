<template>
  <v-container column justify-center align-center>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6" md="3" class="text-center">
        <v-card>
          <v-card-title class="headline justify-center">今日の時間割</v-card-title>
          <v-card-text style="font-size: 20px; color: rgba(0, 0, 0, 0.87);">{{ jikanwari }}</v-card-text>
          <div v-if="property">
            <v-card-title class="headline justify-center">持ち物</v-card-title>
            <v-card-text style="font-size: 20px; color: rgba(0, 0, 0, 0.87);">{{ property }}</v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col />
    </v-row>
    <v-row class="text-center">
      <v-col />
      <v-col cols="12" sm="6" md="3">
        <v-row>
          <v-col>
            <v-btn nuxt to="/table" color="primary" x-large width="140px">時間割表</v-btn>
          </v-col>
          <v-col>
            <v-btn nuxt to="/registration" color="primary" x-large width="140px">時間割登録</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn nuxt to="/mypage" color="primary" x-large width="140px">マイページ</v-btn>
          </v-col>
          <v-col>
            <v-btn href="https://line.me/R/ti/p/%40ywg0561x" color="#00b900" x-large width="140px">
              <font color="white">LINEBot</font>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      jikanwari: '',
      property: '',
      userId: ''
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    liff.getProfile().then(async(profile) => {
      const userId = profile.userId;
      this.userId = userId;
      let ttdata;
      const GetTtdataAsync = async() => {
        try {
          const getTtdata = await fetch(`https://cshm50yn8b.execute-api.ap-northeast-1.amazonaws.com/prod?userId=${userId}`, {
            mode: 'cors'
          });
          ttdata = await getTtdata.json();
        } catch (e) {
          // alert
          console.log(e);
        }
        return ttdata;
      };
      ttdata = await GetTtdataAsync();
      console.log(ttdata.ttdata);
      sessionStorage.setItem('jikanwari', ttdata);

      if (ttdata === 'no') {
        // alert
        console.log('時間割が登録されていません。時間割登録フォームへ移動します。');
        this.$router.go('/registration');
      }
      let sendTt;
      if (ttdata.property) {
        let property = ttdata.property;
        property = property.split(',');
        switch (dayOfWeekStr) {
          case '日':
            sendTt = '今日の時間割はありません';
            property = undefined;
            break;
          case '土':
            sendTt = ttdata.sat;
            property = property[5];
            break;
          case '月':
            sendTt = ttdata.mon;
            property = property[0];
            break;
          case '火':
            sendTt = ttdata.tue;
            property = property[1];
            break;
          case '水':
            sendTt = ttdata.wed;
            property = property[2];
            break;
          case '木':
            sendTt = ttdata.thu;
            property = property[3];
            break;
          case '金':
            sendTt = ttdata.fri;
            property = property[4];
            break;
        }
        this.jikanwari = sendTt;
        this.property = property;
      }
    }).catch((err) => {
      console.log('error', err);
    });
  }
};
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
