import path from 'path';
import fs from 'fs';
import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: '時間割bot', // process.env.npm_package_name || '',
    meta: [ //
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '時間割bot'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://jikanwari-bot.shinbunbun.info'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '時間割bot'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '時間割bot'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://jikanwari-bot.shinbunbun.info/image/ogp.jpg'
      }
    ],
    script: [{
      src: 'https://static.line-scdn.net/liff/edge/2.1/sdk.js'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [ //
    {
      src: '~/plugins/routerOption.js',
      ssr: false
    },
    '~/plugins/sanitize-html'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-93929869-8'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/dotenv',
      {
        filename: process.env.NODE_ENV === 'development' ? './config/.env.dev' : './config/.env.prod'
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3000,
    host: 'localhost',
    https: process.env.NODE_ENV === 'production' ? {} : {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    }
  }
};
