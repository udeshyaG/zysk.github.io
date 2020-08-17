export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Barlow',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
      },
      {
        src: '/main.js',
      },
      {
        src: 'https://embed.tawk.to/591d828a8028bb73270467a7/default',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js',
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.min.js',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/tawk.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
