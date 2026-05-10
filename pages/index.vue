<template>
  <v-sheet
    id="cv-root"
    width="980"
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
    <v-row id="footer-band">
      <v-col class="pa-4 text-center">
        <div class="footer-text">
          Crafted with ❤️ — Eddy Mhalli · {{ year }}
        </div>
      </v-col>
    </v-row>
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
  computed: {
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
/* The introduction band wraps the CTA title + dino runway. The title uses
   margin-top: -25px so it straddles the body/runway boundary like the
   headline at the top of the page. Critically, this row must NOT clip
   overflow — `overflow: inherit` would inherit `hidden` from cv-root and
   chop the top half of the title off (the original "half visible" bug). */
div#introduction {
  background-color: #c5a28c;
  position: relative;
  overflow: visible;
}
div.title {
  font-size: 1rem !important;
  font-weight: 700;
  color: #1a2d3b;
  letter-spacing: 0.02em;
  border: 1px dashed #1a2d3b;
  padding: 4px 14px;
  margin: -25px auto 0;
  width: auto;
  max-width: max-content;
  background: url('/decore.png') left;
  background-size: 100%;
  background-color: #e5e3e6;
  position: relative;
  z-index: 2;
}
div.subtitle {
  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(247, 247, 247);
}
span.h-5 {
  height: 5px;
}
div#footer-band {
  background: url('/decore.png') top;
  background-size: contain;
  background-color: #1a2d3b;
  color: #fff;
  margin: 0;
}
.footer-text {
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: #cdd5dc;
}
</style>
