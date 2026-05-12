<template>
  <v-row id="body" class="body-row">
    <v-col id="belly" class="pa-0 mx-3">
      <v-row class="pa-2">
        <v-col class="pa-1 pr-2">
          <div v-reveal><Experiences /></div>
          <!-- <PersonalExploration /> -->
        </v-col>
        <v-col class="pa-1 pl-2">
          <div v-reveal><MainProgrammingTools /></div>
          <div v-reveal="80"><Hobbies /></div>
          <v-img
            v-reveal
            :src="'./undraw_maker_launch_crhe.svg'"
            contain
            :width="240"
            class="mx-auto my-3"
          />
          <div v-reveal><Formations /></div>
          <div v-reveal><Projects /></div>
          <v-img
            v-reveal
            :src="'./undraw_delivery_address_03n0.png'"
            contain
            :width="180"
            class="mx-auto my-3"
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
  margin-left: 0;
  margin-bottom: 10px;
}
</style>
