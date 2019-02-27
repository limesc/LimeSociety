<template>  
  <div id="app">
    <v-app light>
      
      <v-content>
        <section>
          <v-parallax src="~/assets/images/lime.jpg" height="600">
            <v-layout column align-center justify-center class="white--text">
              <img src="~/assets/images/logo.jpg" alt="Vuetify.js" height="200">
              <h1 class="white--text mb-2 display-1 text-xs-center">Challenge the Future with Commitment and Passion</h1>
              
              <v-btn class="green lighten-2 mt-5" dark large flat depressed nuxt to="/">
                Tall Me More
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout column wrap class="my-5" align-center>
            <v-container grid-list-xl>
              <v-container overlay fill-height grid-list-md text-xs-center justify-center id="products">
                <div class="row" style="padding:60px 0px 100px 0px">
                  <v-layout fill-height>
                    <v-flex xs12>
                      <v-card-text class="px=0">

                        <h1>PRODUCTS</h1>

                      </v-card-text>
                    </v-flex>
                  </v-layout>
                </div>
              </v-container>
              <v-layout wrap>
                <v-flex xs12 md6>
                  <v-card style="height: 400px;" class="white--text">
                    <div class="v-responsive v-image" style="height: 100%">
                      <div class="v-image__image v-image__image--cover"
                        style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://cdn.pixabay.com/photo/2013/07/18/10/59/heartbeat-163709_960_720.jpg&quot;); background-position: center center;">
                      </div>
                      <v-responsive>
                        <v-layout fill-height wrap text-xs-right ma-0>
                          <v-flex xs12>
                            <span tabindex="0"
                              class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"></span>
                            <h3 class="title font-weight-bold mb-2">Medical DB DB</h3>
                          </v-flex>
                        </v-layout>
                      </v-responsive>
                    </div>
                  </v-card>
                  <v-card-title>
                    <div>
                      <span class="grey--text">간략 설명</span>
                      <br>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card style="height: 400px" class="white--text">
                    <div class="v-responsive v-image" style="height: 100%;">
                      <div class="v-image__image v-image__image--cover"
                        style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://vitaldb.net/static/img/home/splash-1.png&quot;); background-position: center center;">
                      </div>
                      <v-responsive>
                        <v-layout fill-height wrap text-xs-right ma-0>
                          <v-flex xs12>
                            <span tabindex="0"
                              class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"></span>
                            <h3 class="title font-weight-bold mb-2">Vital DB</h3>
                          </v-flex>
                          <a class="flex align-self-end" href="https://vitaldb.net/" target="_blank">
                            <v-btn flat router nuxt
                              class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark green">
                              <div class="v-btn__content">read more</div>
                            </v-btn>
                          </a>
                        </v-layout>
                      </v-responsive>
                    </div>
                  </v-card>
                  <v-card-title>
                    <div>
                      <span class="grey--text">Open Access Repository of Vital Signs.</span>
                      <br>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card style="height: 400px" class="white--text">
                    <div class="v-responsive v-image" style="height: 100%;">
                      <div class="v-image__image v-image__image--cover"
                        style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/autumnclouds.e44135e5.jpg&quot;); background-position: center center;">
                      </div>
                      <v-responsive>
                        <v-layout fill-height wrap text-xs-right ma-0>
                          <v-flex xs12>
                            <span tabindex="0"
                              class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"></span>
                            <h3 class="title font-weight-bold mb-2">Next Medicine</h3>
                          </v-flex>
                          <a class="flex align-self-end" href="http://nextmedicine.com/signin" target="_blank">
                            <v-btn flat router nuxt
                              class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark green">
                              <div class="v-btn__content">read more</div>
                            </v-btn>
                          </a>
                        </v-layout>
                      </v-responsive>
                    </div>
                  </v-card>
                  <v-card-title>
                    <div>
                      <span class="grey--text">간략 설명</span>
                      <br>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card style="height: 400px" class="white--text">
                    <div class="v-responsive v-image" style="height: 100%">
                      <div class="v-image__image v-image__image--cover"
                        style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/autumnclouds.e44135e5.jpg&quot;); background-position: center center;">
                      </div>
                      <v-responsive>
                        <v-layout fill-height wrap text-xs-right ma-0>
                          <div class="flex xs12">
                            <span tabindex="0"
                              class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"></span>
                            <h3 class="title font-weight-bold mb-2">cPMTB</h3>
                          </div>
                          <div class="flex align-self-end">
                            <v-btn flat router nuxt to="/blog"
                              class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark green">
                              <div class="v-btn__content">read more</div>
                            </v-btn>
                          </div>
                        </v-layout>
                      </v-responsive>
                    </div>
                  </v-card>
                  <v-card-title>
                    <div>
                      <span class="grey--text">간략 설명</span>
                      <br>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          </v-layout>
        </section>

        <section>
          <v-parallax src="~/assets/images/lime2.jpg" height="380">
            <v-layout column align-center justify-center>
              <div class="headline white--text mb-3 text-xs-center">COMPANY</div>
              <em>Kick-start your application today</em>
              <v-btn class="green lighten-2 mt-5" dark large flat depressed nuxt to="/blog">
                go to blog
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-container fluid>
            <v-layout fill-height grid-list-xl text-xs-center justify-center wrap>
              <v-flex xs12 md4>
                <v-icon color="lime" size="50">group</v-icon>
                <h4 class="service-heading">Team</h4>
                <p class="text-muted">February 14, 2012
                  <br>Number of Members 8
                </p>
              </v-flex>

              <v-flex xs12 md4>
                <v-icon color="lime" size="50">location_city</v-icon>
                <h4 class="service-heading">Location</h4>
                <p class="text-muted">803 ho - 8F, 311, Teheran-ro Gangnam-gu Seoul, Republic of Korea<br><a
                    href="https://www.google.com/maps?q=%EC%95%84%EB%82%A8%ED%83%80%EC%9B%8C&hl=ko&authuser=0&pq=%EC%95%84%EB%82%A8%ED%83%80%EC%9B%8C+%EC%98%81%EB%AC%B8%EC%A3%BC%EC%86%8C&um=1&ie=UTF-8&sa=X&sqi=2&ved=0ahUKEwjR2v2B0NjgAhUQQN4KHVPLAcsQ_AUIDygC"
                    target="_blank">Google Map</a> /
                  <a href="https://map.naver.com/index.nhn?query=7JWE64Ko7YOA7JuM&enc=b64&tab=1" target="_blank">Naver
                    Map</a> /
                  <a href="https://map.kakao.com/?from=total&nil_suggest=btn&tab=place&q=%EC%95%84%EB%82%A8%ED%83%80%EC%9B%8C"
                    target="_blank">Daum Map</a></p>

              </v-flex>

              <v-flex xs12 md4>
                <v-icon color="lime" size="50">email</v-icon>
                <h4 class="service-heading">Contact</h4>
                <p class="text-muted">
                  <a href="contact@limesociety.com">contact@limesociety.com</a>
                  <br>+82-70-4129-0214
                </p>
              </v-flex>
            </v-layout>
          </v-container>
        </section>

      </v-content>
    </v-app>
    <!-- <v-parallax height="900" max-width="100%" dark src="https://cdn.pixabay.com/photo/2019/02/12/10/19/acid-3991824_960_720.jpg">
      <v-container overlay fill-height grid-list-md text-xs-center justify-center id="main">
        <v-layout align-center column justify-center>
          <h1
            class="display-2 font-weight-thin mb-6"
          >Challenge the Future with Commitment and Passion</h1>
          <v-btn
            flat
            router
            nuxt
            class="v-btn text-uppercase ma-6 v-chip--label v-chip--small theme--dark green"
          >
            <button v-on:click="products">Get Started</button>
          </v-btn>
        </v-layout>
      </v-container>
    </v-parallax>-->
    <!-- <v-header intro-header src="~/assets/images/lime.jpg">
      <v-container overlay fill-height grid-list-md text-xs-center justify-center id="main">
        <v-layout fill-height>
          <v-flex xs12>
            <v-card-text class="px=0">
              <v-page-heading>
                <h1>Challenge the Future with Commitment and Passion</h1>
              </v-page-heading>
            </v-card-text>
            <a class="flex align-self-end" href>
              <v-btn
                flat
                router
                nuxt
                class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark primary"
              >
                <button v-on:click="main">Tall Me More</button>
              </v-btn>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-header>-->
    <!-- <section>
      <v-container grid-list-xl>
        <v-container overlay fill-height grid-list-md text-xs-center justify-center id="products">
          <div class="row" style="padding:60px 0px 100px 0px">
            <v-layout fill-height>
              <v-flex xs12>
                <v-card-text class="px=0">
                  
                    <h1>PRODUCTS</h1>
                  
                </v-card-text>
              </v-flex>
            </v-layout>
          </div>
        </v-container>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-card style="height: 400px;" class="white--text">
              <div class="v-responsive v-image" style="height: 100%">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://cdn.pixabay.com/photo/2013/07/18/10/59/heartbeat-163709_960_720.jpg&quot;); background-position: center center;"
                ></div>
                <v-responsive>
                  <v-layout fill-height wrap text-xs-right ma-0>
                    <v-flex xs12>
                      <span
                        tabindex="0"
                        class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                      ></span>
                      <h3 class="title font-weight-bold mb-2">Medical DB DB</h3>
                    </v-flex>
                  </v-layout>
                </v-responsive>
              </div>
            </v-card>
            <v-card-title>
              <div>
                <span class="grey--text">간략 설명</span>
                <br>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs12 md6>
            <v-card style="height: 400px" class="white--text">
              <div class="v-responsive v-image" style="height: 100%;">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://vitaldb.net/static/img/home/splash-1.png&quot;); background-position: center center;"
                ></div>
                <v-responsive>
                  <v-layout fill-height wrap text-xs-right ma-0>
                    <v-flex xs12>
                      <span
                        tabindex="0"
                        class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                      ></span>
                      <h3 class="title font-weight-bold mb-2">Vital DB</h3>
                    </v-flex>
                    <a class="flex align-self-end" href="https://vitaldb.net/" target="_blank">
                      <v-btn
                        flat
                        router
                        nuxt
                        class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark green"
                      >
                        <div class="v-btn__content">read more</div>
                      </v-btn>
                    </a>
                  </v-layout>
                </v-responsive>
              </div>
            </v-card>
            <v-card-title>
              <div>
                <span class="grey--text">Open Access Repository of Vital Signs.</span>
                <br>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs12 md6>
            <v-card style="height: 400px" class="white--text">
              <div class="v-responsive v-image" style="height: 100%;">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/autumnclouds.e44135e5.jpg&quot;); background-position: center center;"
                ></div>
                <v-responsive>
                  <v-layout fill-height wrap text-xs-right ma-0>
                    <v-flex xs12>
                      <span
                        tabindex="0"
                        class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                      ></span>
                      <h3 class="title font-weight-bold mb-2">Next Medicine</h3>
                    </v-flex>
                    <a
                      class="flex align-self-end"
                      href="http://nextmedicine.com/signin"
                      target="_blank"
                    >
                      <v-btn
                        flat
                        router
                        nuxt
                        class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark green"
                      >
                        <div class="v-btn__content">read more</div>
                      </v-btn>
                    </a>
                  </v-layout>
                </v-responsive>
              </div>
            </v-card>
            <v-card-title>
              <div>
                <span class="grey--text">간략 설명</span>
                <br>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs12 md6>
            <v-card style="height: 400px" class="white--text">
              <div class="v-responsive v-image" style="height: 100%">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/autumnclouds.e44135e5.jpg&quot;); background-position: center center;"
                ></div>
                <v-responsive>
                  <v-layout fill-height wrap text-xs-right ma-0>
                    <div class="flex xs12">
                      <span
                        tabindex="0"
                        class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                      ></span>
                      <h3 class="title font-weight-bold mb-2">cPMTB</h3>
                    </div>
                    <div class="flex align-self-end">
                      <v-btn
                        flat
                        router
                        nuxt
                        to="/blog"
                        class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark green"
                      >
                        <div class="v-btn__content">read more</div>
                      </v-btn>
                    </div>
                  </v-layout>
                </v-responsive>
              </div>
            </v-card>
            <v-card-title>
              <div>
                <span class="grey--text">간략 설명</span>
                <br>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-container fill-height grid-list-md text-xs-center justify-center id="company">
      <div v-bind:class="row" style="padding:160px 0px 50px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
                <h1>COMPANY</h1>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <section>
      <v-container fluid>
        <v-layout fill-height grid-list-xl text-xs-center justify-center wrap>
          <v-flex xs12 md4>
            <v-icon color="lime" size="50">group</v-icon>
            <h4 class="service-heading">Team</h4>
            <p class="text-muted">February 14, 2012
              <br>Number of Members 8
            </p>
          </v-flex>

          <v-flex xs12 md4>
            <v-icon color="lime" size="50">location_city</v-icon>
            <h4 class="service-heading">Location</h4>
            <p class="text-muted">803 ho - 8F, 311, Teheran-ro   Gangnam-gu Seoul, Republic of Korea<br><a href="https://www.google.com/maps?q=%EC%95%84%EB%82%A8%ED%83%80%EC%9B%8C&hl=ko&authuser=0&pq=%EC%95%84%EB%82%A8%ED%83%80%EC%9B%8C+%EC%98%81%EB%AC%B8%EC%A3%BC%EC%86%8C&um=1&ie=UTF-8&sa=X&sqi=2&ved=0ahUKEwjR2v2B0NjgAhUQQN4KHVPLAcsQ_AUIDygC" target="_blank">Google Map</a> / 
            <a href="https://map.naver.com/index.nhn?query=7JWE64Ko7YOA7JuM&enc=b64&tab=1" target="_blank">Naver Map</a> / 
            <a href="https://map.kakao.com/?from=total&nil_suggest=btn&tab=place&q=%EC%95%84%EB%82%A8%ED%83%80%EC%9B%8C" target="_blank">Daum Map</a></p>
            
          </v-flex>

          <v-flex xs12 md4>
            <v-icon color="lime" size="50">email</v-icon>
            <h4 class="service-heading">Contact</h4>
            <p class="text-muted">
              <a href="contact@limesociety.com">contact@limesociety.com</a>
              <br>+82-70-4129-0214
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>-->
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapState } from 'vuex'

import HelloWorld from '~/components/HelloWorld.vue'

@Component({
  head: {
    title: 'Lime Society',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'keywords', content: 'keyword 1, keyword 2'},
      { hid: 'description', name: 'description', content: 'This is the generic description.'}
    ],
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapActions(['increment'])
  }
})

export default class AboutPage extends Vue {
  data() {
    return {
      row: 1
    }
  }
  
  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  fetch({ store }) {
    store.commit('increment')
  }
}
</script>
