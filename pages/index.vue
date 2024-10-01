<template>
  <v-sheet
    width="850"
    elevation="5"
    color="#E5E3E6"
    class="pt-2"
    style="overflow: hidden"
  >
    <v-row>
      <v-col cols="4" class="pa-0">
        <Header />
      </v-col>
      <v-col>
        <Introduction />
        <Content />
        <v-row id="introduction">
          <v-col class="pb-2" style="height: 100px;">
            <div class="title" style="min-width: 70%;min-height: 30px;text-align: center;">What about calling me now? ;)</div>
            <v-row no-gutters>
              <v-col cols="auto">
                <v-img
                  :src="'./google/dinosaur.png'"
                  class="mx-auto mt-5"
                  max-height="75px"
                  width="90px"
                  />
              </v-col>
              <v-col><div  id="google-ground">&nbsp;</div></v-col>
              <v-col cols="auto">
                <v-img
                  :src="'./google/cactus.png'"
                  class="mx-auto mt-5"
                  max-height="75px"
                  width="90px"
                  />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row id="header" style="height: 150px;"></v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Header from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Content from '~/components/Body.vue'

export default {
  components: {
    Header,
    Introduction,
    Content,
  },
}
</script>

<style scoped>
div#google-ground {
  background: url(./google/ground.png) repeat-x;
  height: 99px;
  background-position: bottom;
  background-size: 30% 90%;
}
div#introduction {
  background-color: #c5a28c;
}
div.title {
  font-size: 1rem !important;
  font-weight: bold;
  color: #1a2d3b;
  border: 1px dashed #1a2d3b;
  padding: 0 10px;
  margin: -25px auto;
  width: auto;
  max-width: max-content;
  background: url('./decore.png') left;
  background-size: 100%;
  background-color: #e5e3e6;
}
div.subtitle {
  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(247, 247, 247);
}
span.h-5 {
  height: 5px;
}
div#header {
  background: url('./decore.png') top;
  background-size: contain;
  background-color: #1a2d3b;
  color: #fff;
}
</style>
