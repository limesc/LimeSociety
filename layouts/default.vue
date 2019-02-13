<template>
  <v-app>
    <v-toolbar color="default" fixed="false">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" />
      <v-toolbar-title>
        <strong>Lime Society</strong>
      </v-toolbar-title>
    </v-toolbar>
    
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-title>
        <h1>Lime Society</h1>
      </v-title>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile router nuxt to="/">
          <v-list-tile-title>HOME</v-list-tile-title>
        </v-list-tile>
        <v-list-tile router nuxt to="/about">
          <v-list-tile-title>ABOUT</v-list-tile-title>
        </v-list-tile>
        <v-list-tile router nuxt to="/medicine">
          <v-list-tile-title>MEDICINE</v-list-tile-title>
        </v-list-tile>
        <v-list-tile router nuxt to="/game">
          <v-list-tile-title>GAME</v-list-tile-title>
        </v-list-tile>
        <v-list-tile router nuxt to="/blog">
          <v-list-tile-title>BLOG</v-list-tile-title>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile router nuxt to="/contact">
          <v-list-tile-title>CONTACT</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

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
      absolute
      color="lime"
    >
      <v-layout
        justify-center
        row
        wrap
      >
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3"
        icon
      >
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
      <v-flex
        py-8
        text-xs-center
        white--text
        xs12
        >
        &copy;Copyright © Lime Society Co., Ltd. 2017
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  data () {
    return {
      drawer: false
    }
  }
}
</script>


<style scoped>
  .title {
    padding-left: 20px;
  }
</style>