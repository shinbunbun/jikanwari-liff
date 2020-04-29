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
              <p class="card-text" v-text="memberStatus"></p>
              <p>
                会員ID：
                <span v-text="userId"></span>
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
  }
}
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
