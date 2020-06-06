<template>
  <v-container column justify-center align-center>
    <v-row class="text-center">
      <v-col>
        <p style="font-size: 30px">アップデート</p>
      </v-col>
    </v-row>
    <v-row class="text-right">
      <v-col />
      <v-col cols="12" sm="6">
        <p>更新日時: 2020/6/7</p>
      </v-col>
      <v-col />
    </v-row>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6">
        <h2>v2.0.0</h2>
      </v-col>
      <v-col />
    </v-row>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6">
        <ul>
          <li>時間割共有で持ち物が共有されないバグを修正しました</li>
          <li>時間割編集をすると共有IDが変わってしまうバグを修正しました</li>
          <li>メニューを一部修正しました</li>
          <li>バージョンを発行することにしました</li>
          <li>時間割お知らせ機能が復活しました</li>
        </ul>
      </v-col>
      <v-col />
    </v-row>
    <v-row class="text-right">
      <v-col />
      <v-col cols="12" sm="6">
        <p>更新日時: 2020/6/7</p>
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
