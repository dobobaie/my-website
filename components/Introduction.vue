<template>
  <v-row id="introduction">
    <v-col class="pb-2">
      <div class="title">
        <v-chip class="ma-2 h-5 px-2" color="#3B6787" label />
        {{ profile.headline }}
        <v-chip class="ma-2 h-5 px-2" color="#3B6787" label />
      </div>
      <div class="mt-7 pa-2 text-center subtitle" v-html="profile.summary" />
    </v-col>
  </v-row>
</template>

<script>
import { useMainStore } from '~/store/profile';

export default {
  setup() {
    return { profile: useMainStore() }
  }
}
</script>

<style scoped>
div#introduction {
  background-color: #c5a28c;
}
div.title {
  font-size: 1rem !important;
  font-weight: 700;
  color: #1a2d3b;
  letter-spacing: 0.02em;
  border: 1px dashed #1a2d3b;
  padding: 4px 14px;
  margin: -25px auto;
  width: auto;
  max-width: max-content;
  background: url('./decore.png') left;
  background-size: 100%;
  background-color: #e5e3e6;
}
div.subtitle {
  font-size: 0.86rem;
  font-weight: 500;
  line-height: 1.55;
  color: #2c2c2c;
  text-align: justify !important;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px !important;
}
div.subtitle :deep(b) {
  color: #1a2d3b;
  font-weight: 700;
}
span.h-5 {
  height: 5px;
}
</style>
