<template>
  <v-row id="introduction">
    <v-col class="pb-2">
      <div class="title">
        <v-chip class="ma-2 h-5 px-2" color="#3B6787" label />
        {{ profile.headline }}
        <v-chip class="ma-2 h-5 px-2" color="#3B6787" label />
      </div>
      <div class="mt-7 text-center subtitle">
        {{ profile.summary }}
      </div>
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
</style>
