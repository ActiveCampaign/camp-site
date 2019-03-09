const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,500,500i,700,700i|Poppins:700,700i' }
    ],
    script: [
      { type: 'text/javascript', src: '//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#19cca3' },

  /*
  ** Global CSS
  */
  css: [
    'camp-css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  /*
  ** Sever configuration
  */
  server: {
    port: '2267',
  }
}
