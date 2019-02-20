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
      <v-container>
        <div class="row">
          <v-carousel :data="data"></v-carousel>
        </div>
      </v-container>
    </v-container>
  </div>
</template>