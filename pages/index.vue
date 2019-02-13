<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center justify-center>
      <div v-bind:class="row" style="padding:110px 0px 100px 0px">
        <v-layout fill-height>
          <v-flex xs12>
            <v-card-text class="px=0">
              <div class="page-heading">
                <h1>Lime Society</h1>
                <hr class="small">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import HelloWorld from "~/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

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
    return {};
  }

  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  fetch({ store }) {
    store.commit("increment");
  }
}
</script>