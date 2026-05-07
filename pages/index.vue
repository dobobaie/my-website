<template>
  <v-sheet
    id="cv-root"
    width="850"
    elevation="5"
    color="#E5E3E6"
    class="pt-2 mx-auto"
    style="overflow: hidden"
  >
    <Header />
    <div v-reveal>
      <Introduction />
    </div>
    <Content />
    <v-row id="introduction">
      <v-col class="pb-2">
        <div class="title">What about calling me now? ;)</div>
        <DinoRunway />
      </v-col>
    </v-row>
    <v-row id="header" style="height: 150px;"></v-row>
  </v-sheet>
</template>

<script>
import Header from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Content from '~/components/Body.vue'
import DinoRunway from '~/components/DinoRunway.vue'

export default {
  components: {
    Header,
    Introduction,
    Content,
    DinoRunway,
  },
}
</script>

<style scoped>
div#introduction {
  background-color: #c5a28c;
  position: relative;
  overflow: inherit;
}
div.title {
  font-size: 1rem !important;
  font-weight: bold;
  color: #1a2d3b;
  border: 1px dashed #1a2d3b;
  padding: 0 10px;
  margin: -25px auto 0;
  width: auto;
  max-width: max-content;
  background: url('./decore.png') left;
  background-size: 100%;
  background-color: #e5e3e6;
  position: relative;
  z-index: 1;
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
