// import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

const config = {
  head: {
    title: 'Lime Society',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'Lime Society project' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css' }
    ]
  },
  /* build: {
    plugins: [new VuetifyLoaderPlugin()],
    extractCSS: true,
    transpile: ['vuetify/lib']
  }, */
  plugins: [
    // '~/plugins/hello',
    '~/plugins/vuetify'
  ],
  css: [
    // '~/assets/app.styl',
    // 'vuetify/dist/vuetify.min.css'
  ]
}

export default config
