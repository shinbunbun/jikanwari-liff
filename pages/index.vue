<template>
  <v-container column justify-center align-center>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6" md="3" class="text-center">
        <v-card>
          <v-card-title class="headline justify-center">今日の時間割</v-card-title>
          <v-card-text style="font-size: 20px; color: rgba(0, 0, 0, 0.87);">
            1. 数学
            <br />2. 体育
            <br />3. 数学
            <br />4. 数学
            <br />5. 数学
            <br />6. 数学
            <br />
          </v-card-text>
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
  }
}
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
