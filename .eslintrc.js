module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
      }
    }],
  }
}
