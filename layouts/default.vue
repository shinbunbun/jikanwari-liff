<template>
  <v-app>
    <div v-if="this.$store.getters.isLoading" id="loading">
      <v-progress-circular :size="70" :width="7" color="primary" indeterminate />
    </div>

    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item to="/" router exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ホーム</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div v-if="$store.getters.getIsLoggedIn">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-list-item href="https://line.me/R/ti/p/%40ywg0561x" target="_blank">
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>LINEBot</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/">
          <img src="~static/image/logo.png" style="width: 100px" />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!--<v-footer :fixed="fixed" app>-->
    <v-footer absolute app>
      <v-row>
        <v-col style="padding: 0" />
        <v-col cols="12" md="8" style="text-align: center">
          <div>
            &copy; {{ new Date().getFullYear() }}
            しんぶんぶん
          </div>
          <div>
            <ul>
              <li>
                <nuxt-link to="/pvy">プライバシーポリシー</nuxt-link>
              </li>
              <li>
                <a href="https://github.com/shinbunbun/jikanwari-liff" target="blank">GitHub</a>
              </li>
              <li>
                <a href="https://lin.ee/fJTaaga" target="blank">お問い合わせ</a>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col style="padding: 0" />
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-table',
          title: '時間割表',
          to: '/table'
        },
        {
          icon: 'mdi-plus-thick',
          title: '時間割登録',
          to: '/registration'
        },
        {
          icon: 'mdi-pencil',
          title: '時間割編集',
          to: '/edit'
        },
        {
          icon: 'mdi-account',
          title: 'マイページ',
          to: '/mypage'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  }
};
</script>

<style lang="scss">
#loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  position: fixed;
  background-color: rgba(#000, 0.5);
}
</style>

<style scoped>
li {
  display: inline-block;
}
</style>
