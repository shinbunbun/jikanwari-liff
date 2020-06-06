<template>
  <v-container column justify-center align-center>
    <v-row class="text-center">
      <v-col>
        <p style="font-size: 30px">登録完了</p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <p>時間割登録が完了しました！</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <v-btn nuxt to="/" color="primary" x-large width="140px">ホームに戻る</v-btn>
      </v-col>
      <v-col>
        <v-btn
          href="https://line.me/R/ti/p/%40ywg0561x"
          target="_blank"
          color="#00b900"
          x-large
          width="140px"
        >
          <font color="white">LINEに戻る</font>
        </v-btn>
      </v-col>
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
