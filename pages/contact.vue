<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center justify-center>
      <div v-bind:class="row" style="padding:110px 0px 100px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
              <div class="page-heading">
                <h1>Contact Us</h1>
                <hr class="small">
                <span class="subheading">Have question?</span>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>

    <div class="text-xs-center">
      <v-dialog v-model="dialog" persistent width="600">
        <v-btn slot="activator" color="red lighten-2" dark>Questions</v-btn>

        <v-card>
          <v-card-title
            class="headline green lighten-2 white--text"
            primary-title
          >Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!</v-card-title>

          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Name"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email Address"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Phone Number"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Message"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog = false">Send</v-btn>
            <v-btn color="primary" flat @click="dialog = false">close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>