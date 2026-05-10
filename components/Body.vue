<template>
  <v-row id="body" class="body-row">
    <v-col id="belly" class="pa-0 mx-4">
      <!-- Upper band: Experiences gets the wider lane (it's 8 long entries
           and was the main reason the right column ran out before the left).
           The narrower right lane carries the compact sidebar content
           (skills, hobbies, decorative image) so both columns end at
           roughly the same vertical position. -->
      <v-row class="pa-3 pb-0">
        <v-col cols="8" class="pr-3">
          <div v-reveal><Experiences /></div>
        </v-col>
        <v-col cols="4" class="pl-3">
          <div v-reveal><MainProgrammingTools /></div>
          <div v-reveal="80"><Hobbies /></div>
          <v-img
            v-reveal
            :src="'./undraw_maker_launch_crhe.svg'"
            contain
            :width="200"
            class="mx-auto my-3"
          />
        </v-col>
      </v-row>

      <!-- Lower band: Formations and Projects sit side by side at equal
           weight — both are short-and-medium length so a 50/50 split keeps
           them visually paired and uses the full sheet width. -->
      <v-row class="pa-3 pt-0">
        <v-col cols="6" class="pr-3">
          <div v-reveal><Formations /></div>
        </v-col>
        <v-col cols="6" class="pl-3">
          <div v-reveal><Projects /></div>
        </v-col>
      </v-row>

      <v-row class="pa-3 pt-0">
        <v-col class="text-center">
          <v-img
            v-reveal
            :src="'./undraw_delivery_address_03n0.png'"
            contain
            :width="200"
            class="mx-auto"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { useMainStore } from '~/store/profile';

import MainProgrammingTools from './MainProgrammingTools'
import Hobbies from './Hobbies'
import Experiences from './Experiences'
import Projects from './Projects'
import Formations from './Formations'
import PersonalExploration from './PersonalExploration.vue';

export default {
  components: {
    MainProgrammingTools,
    Hobbies,
    Experiences,
    Projects,
    Formations,
    PersonalExploration,
  },
  setup() {
    return { profile: useMainStore() }
  }
}
</script>

<style>
div#body.body-row {
  padding-bottom: 24px;
  margin: 0;
}
div#body {
  background: url('/decore.png');
  background-size: contain;
  background-color: #e5e3e6;
}
div#belly {
  border-bottom: 3px solid #c5a28c;
  background-color: rgba(239, 239, 239, 0.5);
  color: #283335;
}

div.title {
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #1a2d3b;
  margin: 6px 0 4px;
}
div.date {
  font-size: 0.78rem;
  color: #6f6f6f;
  letter-spacing: 0.01em;
}
div.subtitle {
  font-size: 0.92rem;
  font-weight: 700;
  color: #3e6abf;
  margin-top: 2px;
}
div.subtitle span {
  font-size: 0.9rem;
  color: #1a2d3b;
}
div.text {
  font-size: 0.88rem;
  color: #6b6b6b !important;
  line-height: 1.45;
  margin-top: 2px;
  text-align: justify;
}

ul {
  margin-left: 20px;
  margin-top: 4px;
}
ul li {
  font-weight: 500;
  font-size: 0.86rem;
  line-height: 1.5;
  color: #3a3a3a;
}

span.indentation {
  display: inline-block;
  height: 22px;
  width: 14px;
  border-left: 5px solid #c5a28c;
  border-right: 5px solid #c5a28c;
  margin-right: 10px;
  vertical-align: middle;
  transform: skew(-20deg);
}
section {
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>
