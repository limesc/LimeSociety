<template>
  <div>    
    <v-container
      overlay
      img-scr="../images/lime.jpg"
      fill-height
      grid-list-md
      text-xs-center
      justify-center
      >
      <div v-bind:class="row" style="padding:110px 0px 100px 0px">
        <v-layout fill-height>
          <v-flex xs12>
            <v-card-text class="px=0">
              <div class="page-heading">
                <h1>Lime Society</h1>
                <span class="subheading">Challenge the Future with Commitment and Passion</span>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <v-container>
      <p class="text-md-center">라임 소사이어티는 다양한 사람들이 모여 때 묻지 않은 색다른 재미를 만들어갑니다.</p>
      <p
        class="text-md-center"
      >혁신, 재미, 소통을 핵심 가치 삼아, 세상을 널리 이롭게하고, 국가를 초월하여 오래토록 기억될, 훌륭한 소프트웨어를 만들어가겠습니다.</p>
    </v-container>
    <section id="feed">
      <v-container grid-list-xl>
        <div class="layout wrap">
          <div class="flex xs12">
            <div class="v-card v-card--flat v-sheet v-sheet--tile theme--dark">
              <div class="v-responsive v-image grey lighten-2" style="height: 400px; width: 100%;">
                <div class="v-responsive__sizer" style="padding-bottom: 66.7273%;"></div>
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: url(&quot;https://free-blog.vuetifyjs.com/img/blurcamera.d2d68327.jpg&quot;); background-position: center center;"
                ></div>
                <div class="v-responsive__content">
                  <div class="layout fill-height align-center pa-3">
                    <div class="flex xs12 md7 offset-md5">
                      <h1 class="display-3 font-weight-light">
                        <strong>Company</strong>
                      </h1>
                      <div class="subheading text-uppercase pl-2 mb-4">Who we are, what we do.</div>
                      <v-btn
                        flat
                        router
                        nuxt
                        to="/about"
                        class="v-btn v-btn--depressed v-btn--round theme--dark primary"
                      >
                        <div class="v-btn__content">read more</div>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="layout wrap">
          <div class="flex xs12 md3">
            <a
              href="#!"
              class="v-card v-card--flat v-sheet v-sheet--tile theme--dark grey lighten-1"
              style="height: 350px;"
            >
              <div class="v-responsive v-image" style="height: 100%;">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/moroccandays.118acbab.jpg&quot;); background-position: center center;"
                ></div>
                <div class="v-responsive__content">
                  <div class="layout fill-height wrap text-xs-right ma-0">
                    <div class="flex xs12">
                      <span
                        tabindex="0"
                        class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                      ></span>
                      <h3 class="title font-weight-bold mb-2">Medical DB 2018</h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="flex xs12 md3">
            <a
              href="#!"
              class="v-card v-card--flat v-sheet v-sheet--tile theme--dark grey lighten-1"
              style="height: 350px;"
            >
              <div class="v-responsive v-image" style="height: 100%;">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/autumnclouds.e44135e5.jpg&quot;); background-position: center center;"
                ></div>
                <div class="v-responsive__content">
                  <div class="layout fill-height wrap text-xs-right ma-0">
                    <div class="flex xs12">
                      <span
                        tabindex="0"
                        class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                      ></span>
                      <h3 class="title font-weight-bold mb-2">Vital DB</h3>
                    </div>
                    <a class="flex align-self-end" href="https://vitaldb.net/" target="_blank">
                      <v-btn
                        flat
                        router
                        nuxt
                        class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark primary"
                      >
                        <div class="v-btn__content">read more</div>
                      </v-btn>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="flex xs12 md3">
            <a
              href="#!"
              class="v-card v-card--flat v-sheet v-sheet--tile theme--dark grey lighten-1"
              style="height: 350px;"
            >
              <div class="v-responsive v-image" style="height: 100%;">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/autumnclouds.e44135e5.jpg&quot;); background-position: center center;"
                ></div>
                <div class="v-responsive__content">
                  <div class="layout fill-height wrap text-xs-right ma-0">
                    <div class="flex xs12">
                      <span
                        tabindex="0"
                        class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                      ></span>
                      <h3 class="title font-weight-bold mb-2">Next Medicine</h3>
                    </div>
                    <a class="flex align-self-end" href="http://nextmedicine.com/signin" target="_blank">
                      <v-btn
                        flat
                        router
                        nuxt
                        class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark primary"
                      >
                        <div class="v-btn__content">read more</div>
                      </v-btn>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="flex xs12 md3">
            <a
              href="#!"
              class="v-card v-card--flat v-sheet v-sheet--tile theme--dark grey lighten-1"
              style="height: 350px;"
            >
              <div class="v-responsive v-image" style="height: 100%;">
                <div
                  class="v-image__image v-image__image--cover"
                  style="background-image: linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(&quot;https://free-blog.vuetifyjs.com/img/autumnclouds.e44135e5.jpg&quot;); background-position: center center;"
                ></div>
                <div class="v-responsive__content">
                  <div class="layout fill-height wrap text-xs-right ma-0">
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
                        to="/about"
                        class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark primary"
                      >
                        <div class="v-btn__content">read more</div>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

import HelloWorld from "~/components/HelloWorld.vue"
import { mapState, mapActions } from "vuex"

@Component({
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(["counter"])
  },
  methods: {
    ...mapActions(["increment"])
  }
})
export default class AboutPage extends Vue {
  data() {
    return {}
  }

  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  fetch({ store }) {
    store.commit("increment")
  }
}
</script>
