<template>
  <v-app>
    <v-toolbar flat color="white" :fixed="true">
      <!-- <v-toolbar-side-icon @click.native.stop="drawer = !drawer" /> -->
      <V-btn flat router nuxt to="/" on:click="main">
        <img src="~/assets/images/logo.jpg">
      </V-btn>

      <v-spacer></v-spacer>

      <v-toobar-items>
        <v-btn flat depressed nuxt to="/">PRODUCTS</v-btn>
      </v-toobar-items>
      <v-toobar-items>
        <v-btn flat depressed nuxt to="/">COMPANY</v-btn>
      </v-toobar-items>
      <v-toobar-items>
        <v-btn flat depressed nuxt to="/blog">BLOG</v-btn>
      </v-toobar-items>
      
    </v-toolbar>
    
    <!-- <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-title>
        <h1>Lime Society</h1>
      </v-title>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile router nuxt to="/">
          <v-list-tile-title>HOME</v-list-tile-title>
        </v-list-tile>
        <v-list-tile router nuxt to="/">
          <v-list-tile-title>COMPANY</v-list-tile-title>
        </v-list-tile>
        <v-list-tile router nuxt to="/blog">
          <v-list-tile-title>BLOG</v-list-tile-title>
        </v-list-tile>

        <v-divider></v-divider>

        
      </v-list>
    </v-navigation-drawer> -->

    <main>
      <v-content>
        <v-container
          fluid
          height="64px"
        >
          <nuxt />
        </v-container>
      </v-content>
    </main>
    <v-footer
      color="defal"
    >
      <v-layout
        justify-center
        row
        wrap
      >
      <v-flex
        py-12
        text-xs-center
        white--text
        xs12
        >
        &copy;Copyright © Lime Society Co., Ltd. 2019
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  
})

export default class DefaultLayout extends Vue {
  data () {
    return {
      drawer: false,
      logo: '/favicon.ico'
    }
  }
}
</script>

<style scoped>
  .title {
    padding-left: 20px
  }
  
</style>
