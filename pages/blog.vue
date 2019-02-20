<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center justify-center>
      <div v-bind:class="row" style="padding:110px 0px 100px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
              <v-page-heading>
                <h1>blog</h1>
                <span class="subheading">News about us</span>
              </v-page-heading>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <v-container>
      <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container>
    <v-flex xs12 md3>
      <v-layout>
        <v-card>
          <v-card align="left">

          </v-card>
        </v-card>
      </v-layout>    
    </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src:"../images/company.jpg"
        }
      ]
    }
  }
}
</script>