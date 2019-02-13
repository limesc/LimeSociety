<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center justify-center>
      <div v-bind:class="row" style="padding:110px 0px 100px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
              <div class="page-heading">
                <h1>blog</h1>
                <hr class="small">
                <span class="subheading">News about us</span>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <v-container>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div class="post-preview">
            <a router nuxt to="princessrush2" style="text-decoration:none" href="javascript:;">
              <h2 class="post-title">"킥더프린스:프린세스러시 2" 공개</h2>
              <h3 class="post-subtitle">"프린세스 러시"의 차기작을 공개합니다.</h3>
              <h4>August 5, 2017</h4>
            </a>
          </div>
          <hr>
          <div class="post-preview">
            <a style="text-decoration:none" href="javascript:;">
              <h2 class="post-title">홈페이지 리뉴얼</h2>
              <h3 class="post-subtitle">홈페이지를 새로 제작하는 중입니다.</h3>
              <h4>May 11, 2017</h4>
            </a>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>