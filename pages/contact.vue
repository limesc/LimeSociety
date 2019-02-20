<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center justify-center >
      <div v-bind:class="row" style="padding:110px 0px 100px 0px">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text class="px=0">
              <div class="page-heading">
                <h1>Contact Us</h1>
                <span class="subheading">Have question?</span>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
    <v-container>
      <v-card-group>
        <section id="feed">
          <v-flex xs6 md5>
            <v-card>
              <v-col cols="4">
                <v-img left src="../images/company.jpg"/>
              </v-col>
              <v-card-text class="px=0">
                <v-page-heading>
                  <h1>회사 주소</h1>
                  <span class="subheading">서울 강남구 테헤란로 311 803호
                    <br>전화번호 : ------
                  </span>
                </v-page-heading>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 md5>
            <v-card>
              <v-col cols="4">
                <v-card-text></v-card-text>
                <div class="text-xs-center">
                  <v-dialog v-model="dialog" persistent width="600">
                    <v-btn slot="activator" color="red lighten-2" dark>Questions</v-btn>
                    <v-card>
                      <v-card-title
                        class="headline green lighten-2 white--text"
                        primary-title
                      >Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat @click="dialog = false">Send</v-btn>
                        <v-btn color="primary" flat @click="dialog = false">close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-col>
            </v-card>
          </v-flex>
        </section>
      </v-card-group>
    </v-container>
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
