<template>
  <v-container column justify-center align-center>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6" md="3" class="text-center">
        <v-card>
          <v-card-title class="headline justify-center">今日の時間割</v-card-title>
          <v-card-text
            style="font-size: 20px; color: rgba(0, 0, 0, 0.87);"
            v-html="$sanitize(jikanwari)"
          />
          <div v-if="property">
            <v-card-title class="headline justify-center">持ち物</v-card-title>
            <v-card-text style="font-size: 20px; color: rgba(0, 0, 0, 0.87);">{{ property }}</v-card-text>
          </div>
          <v-row>
            <v-col>
              <v-btn color="primary" x-large width="140px" @click="send">友達に送る</v-btn>
            </v-col>
          </v-row>
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
            <v-btn nuxt to="/edit" color="primary" x-large width="140px">時間割編集</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn nuxt to="/mypage" color="primary" x-large width="140px">マイページ</v-btn>
          </v-col>
          <v-col>
            <v-btn
              href="https://line.me/R/ti/p/%40ywg0561x"
              target="_blank"
              color="#00b900"
              x-large
              width="140px"
            >
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
    console.log(10);
    if (this.$route.path === '/login') {
      // eslint-disable-next-line no-undef
      liff.login();
      this.$store.commit('updateLoading', false);
      return;
    }
    // eslint-disable-next-line no-undef
    liff.getProfile().then(async(profile) => {
      const userId = profile.userId;
      this.userId = userId;
      let ttdata;

      // console.log(this.$store.state.jikanwari);
      if (this.$store.state.jikanwari) {
        // console.log(0);
        ttdata = this.$store.state.jikanwari;
      } else {
        // console.log(1);
        const GetTtdataAsync = async() => {
          let res;
          try {
            const getTtdata = await fetch(`https://cshm50yn8b.execute-api.ap-northeast-1.amazonaws.com/prod?userId=${userId}`, {
              mode: 'cors'
            });
            res = await getTtdata.json();
          } catch (e) {
            // alert
            console.log(e);
          }
          return res;
        };
        const data = await GetTtdataAsync();
        console.log(data);
        ttdata = data.ttdata;
        this.$store.state.jikanwari = ttdata;
      }
      // console.dir(ttdata);

      if (ttdata === 'no') {
        // alert
        alert('時間割が登録されていません。時間割登録フォームへ移動します。');
        this.$store.commit('updateLoading', false);
        this.$router.push('/registration');
      }
      let sendTt;

      const date = new Date();
      const dayOfWeek = date.getDay();
      const dayOfWeekStr = ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];

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
        // console.log(sendTt);
        this.jikanwari = sendTt.replace(/\n/g, '<br/>');
        this.property = property;
      } else {
        switch (dayOfWeekStr) {
          case '日':
            sendTt = '今日の時間割はありません';
            break;
          case '土':
            sendTt = ttdata.sat;
            break;
          case '月':
            sendTt = ttdata.mon;
            break;
          case '火':
            sendTt = ttdata.tue;
            break;
          case '水':
            sendTt = ttdata.wed;
            break;
          case '木':
            sendTt = ttdata.thu;
            break;
          case '金':
            sendTt = ttdata.fri;
            break;
        }
        console.log(sendTt);
        this.jikanwari = sendTt.replace(/\n/g, '<br/>');
      }
      this.$store.commit('updateLoading', false);
    }).catch((err) => {
      console.log('error', err);
      this.$store.commit('updateLoading', false);
    });
  },
  methods: {
    send() {
      // eslint-disable-next-line no-undef
      // if (liff.isApiAvailable('shareTargetPicker')) {
      // eslint-disable-next-line no-undef
      liff.shareTargetPicker([
        {
          type: 'text',
          text: (this.jikanwari).replace(/<br\/>/g, '\n')
        }
      ])
        .then(
        ).catch(function(res) {
          alert('メッセージを送信できませんでした');
        });
      /* } else {
        alert('このブラウザはメッセージの送信に非対応です。');
      } */
    }
  }
};
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
