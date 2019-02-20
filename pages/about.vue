<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center justify-center>
      <div v-bind:class="row" style="padding:110px 0px 100px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
              <v-page-heading>
                <h1>About Us</h1>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class AboutPage extends Vue {
  data () {
    return {}
  }
}
</script>
