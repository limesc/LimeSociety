<template>
  <div>
    <v-header>
      <v-container overlay fill-height grid-list-md text-xs-center justify-center>
        <div class="row" style="padding:0px 0px 100px 0px" img src="~/assets/images/lime.jpg">
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
                  <div class="v-btn__content">Tall Me More</div>
                </v-btn>
              </a>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </v-header>

    <section id="feed">
      <v-container grid-list-xl>
        <v-container overlay fill-height grid-list-md text-xs-center justify-center>
          <div class="row" style="padding:110px 0px 100px 0px" img src="~/assets/images/lime.jpg">
            <v-layout fill-height>
              <v-flex xs12>
                <v-card-text class="px=0">
                  <v-page-heading>
                    <h1>PRODUCTS</h1>
                  </v-page-heading>
                </v-card-text>
              </v-flex>
            </v-layout>
          </div>
        </v-container>
        <v-row></v-row>
        <v-layout wrap>
          <v-container>
            <v-layout>
              <v-flex xs12 md6>
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
                    <v-responsive>
                      <v-layout fill-height wrap text-xs-left ma-0>
                        <v-flex xs12>
                          <span
                            tabindex="0"
                            class="v-chip mx-0 mb-2 text-uppercase v-chip--label v-chip--small theme--dark grey darken-3 white--text"
                          ></span>
                          <h3 class="title font-weight-bold mb-2">Medical DB 2018</h3>
                        </v-flex>
                      </v-layout>
                    </v-responsive>
                  </div>
                </a>
              </v-flex>
              <v-layout xs12 md6 align="center">
                <v-card-text>설명글</v-card-text>
              </v-layout>
            </v-layout>
          </v-container>

          <v-container>
            <v-layout>
              <v-layout xs12 md6 align="center">
                <v-card-text>설명글</v-card-text>
              </v-layout>
              <v-flex xs12 md6>
                <a
                  href="#!"
                  class="v-card v-card--flat v-sheet v-sheet--tile theme--dark grey lighten-1"
                  style="height: 350px;"
                >
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
                            class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark primary"
                          >
                            <div class="v-btn__content">read more</div>
                          </v-btn>
                        </a>
                      </v-layout>
                    </v-responsive>
                  </div>
                </a>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container>
            <v-layout>
              <v-flex xs12 md6>
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
                    <v-responsive>
                      <v-layout fill-height wrap text-xs-left ma-0>
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
                            class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark primary"
                          >
                            <div class="v-btn__content">read more</div>
                          </v-btn>
                        </a>
                      </v-layout>
                    </v-responsive>
                  </div>
                </a>
              </v-flex>
              <v-layout xs12 md6 align="center">
                <v-card-text>설명글</v-card-text>
              </v-layout>
            </v-layout>
          </v-container>
          <v-container>
            <v-layout>
              <v-layout xs12 md6 align="center">
                <v-card-text>설명글</v-card-text>
              </v-layout>
              <v-flex xs12 md6>
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
                            to="/about"
                            class="v-btn text-uppercase ma-0 v-chip--label v-chip--small theme--dark primary"
                          >
                            <div class="v-btn__content">read more</div>
                          </v-btn>
                        </div>
                      </v-layout>
                    </v-responsive>
                  </div>
                </a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>

    <v-container fill-height grid-list-md text-xs-center justify-center>
      <div v-bind:class="row" style="padding:20px 0px 10px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
              <v-page-heading>
                <h1>COMPANY</h1>
                <span class="subheading">Who we are, what we do.</span>
              </v-page-heading>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <v-container>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <h2 class="section-heading">President</h2>
          <p>Hojong Lee</p>
          <h2 class="section-heading">Founded</h2>
          <p>February 14, 2012</p>
          <h2 class="section-heading">Number of Members</h2>
          <p>17</p>
          <h2 class="section-heading">History</h2>
          <p>
            <small>2012.02</small> 법인설립
            <br>
            <small>2013.05</small> 모바일 게임 “프린세스 러시 for Kakao” 한국 출시 (자체 출시)
            <br>
            <small>2013.11</small> 모바일 게임 “にゃんこ大暴走(냥코대폭주)” 일본 출시 (퍼블리셔: DeNA)
            <br>
            <small>2013.11</small> 모바일 게임 “ｱﾝｸﾞﾘｰ吉田くんとﾊﾝｸﾞﾘｰﾊﾞｰﾄﾞ(앵그리 요시다 군과 헝그리 버드)” 일본 출시 (퍼블리셔: DeNA)
            <br>
            <small>2013.11</small> 스페인 모바일 게임 개발사 5ants와 모바일 게임 공동개발
            <br>
            <small>2013.12</small> NPC (넥슨 앤 파트너스 센터) 선정 및 선릉점 입주
            <br>
            <small>2014.05</small> 모바일 게임 “公主快跑(공주쾌포)” 중국 출시 (퍼블리셔: 上海游点信息有限科技公司)
            <br>
            <small>2015.03</small> 모바일 게임 “公主快跑(공주쾌포)” 대만, 홍콩, 마카오 출시 (퍼블리셔: Yu-cheng Entertainment Co.,LTD)
            <br>
            <small>2015.05</small> 모바일 게임 “Princess Rush” 태국 출시 (퍼블리셔: Cubinet Interactive)
            <br>
            <small>2015.05</small> 기술보증 “벤처기업 인증” 획득
            <br>
            <small>2015.06</small> 모바일 게임 “Princess Rush” 인도네시아 출시 (퍼블리셔: PT Megaxus)
            <br>
            <small>2016.05</small> 미국 최대 온라인 LEGO 마켓 운영사 SoHoBricks와 레고블록 인식 프로그램 “BrickScanner” 개발
            <br>
            <small>2017.03</small> 마취과 의학 연구용 데이터베이스 Vital DB (서울대병원)
            <br>
            <small>2017.06</small> 병/의원에서 빠른 외래 진료를 위한 설문 시스템 (바노바기 성형외과)
            <br>
            <small>2017.09</small> 모바일 앱 Vital Viewer (서울대병원)
            <br>
            <small>2017.09</small> SNUH-biologics cohort e-DB (서울대병원)
            <br>
            <small>2017.09</small> 모바일 게임 “Kick the Prince: Princess Rush” 글로벌 출시
            <br>
            <small>2017.12</small> 모바일 게임 1종 출시 (예정)
          </p>
        </div>
      </div>
    </v-container>
    <v-container fill-height grid-list-xl text-xs-left justify-right>
      <div v-bind:class="row" style="padding:20px 0px 10px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
              <v-page-heading>
                <h1>Contact Us</h1>
              </v-page-heading>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
    <v-container gird-list-md text-xs-center>
      <v-layout>
        <v-flex xs12 md6>
          <v-card>
            <v-card-text class="px=0">
              <v-page-heading>
                <h1>회사 주소</h1>
                <span class="subheading">서울 강남구 테헤란로 311 803호</span>
              </v-page-heading>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapState } from 'vuex'

import HelloWorld from '~/components/HelloWorld.vue'

@Component({
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
    return {}
  }

  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  fetch({ store }) {
    store.commit('increment')
  }
}
</script>
