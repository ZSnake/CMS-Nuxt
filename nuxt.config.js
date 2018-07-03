require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Backoffice | Modal Rakyat Indonesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1993ff' },


  /**
   * Import CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/font-awesome/css/font-awesome.min.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],

  /*
  ** Import Plugin
   */
  plugins: [
    { src: '~plugins/bootstrap-vue.js', ssr: false },
    { src: '~plugins/vee-validate.js', ssr: false },
    { src: '~plugins/vue-notification.js', ssr: false }
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'moment', 'vee-validate', 'vuejs-datepicker'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  },
  modules: ['@nuxtjs/dotenv']
};
