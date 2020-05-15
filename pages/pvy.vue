<template>
  <v-container column justify-center align-center>
    <v-row class="text-center">
      <v-col>
        <p style="font-size: 30px">プライバシーポリシー</p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col />
      <v-col cols="12" md="4">
        <h3>アクセス解析ツールについて</h3>
        <br />
        <p>
          時間割bot（以下、当サービス）では、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          <br />このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
          <br />このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          <br />この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          <br />この規約に関して、詳しくは
          <a href="https://www.google.com/analytics/terms/jp.html">こちら</a>をご確認下さい。
        </p>
        <h3>LINEから取得する情報について</h3>
        <br />
        <p>当サービスがLINEから取得する情報は以下の通りです。</p>
        <ul>
          <li>userId（システム内部でユーザーを識別するIDで、友達追加用のIDではありません）</li>
          <li>ユーザープロフィール</li>
          <ul>
            <li>LINEの表示名</li>
            <li>プロフィール画像</li>
            <li>ステータスメッセージ</li>
          </ul>
          <li>時間割botへ送信したメッセージ</li>
        </ul>
        <br />
        <p>また、当サービスでは個人情報保護法で定められている「個人情報」の取得は一切行いません。</p>
        <br />
        <h3>取得した情報の取り扱いについて</h3>
        <br />
        <p>時間割botで取得した全ての情報は、匿名化された形でのアクセス解析と時間割botが提供するサービスでのみ使用されます。</p>

        <hr />
        <br />
        <p style="font-size: 80%; color: #999">
          2019年6月15日 制定・施行
          <br />2020年5月15日 改定
        </p>
      </v-col>
      <v-col />
    </v-row>
    <v-row>
      <v-col />
      <v-col class="text-center">
        <v-btn nuxt to="/" color="primary" x-large width="140px">ホームに戻る</v-btn>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  mounted() {
    this.$store.state.jikanwari = '';
    this.$store.commit('updateLoading', false);
  }
};
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
