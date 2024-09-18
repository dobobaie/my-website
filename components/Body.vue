<template>
  <v-row id="body">
    <v-col id="belly" class="pa-0 mx-4">
      <v-row class="pa-2">
        <v-col class="pr-0">
          <Experiences />
          <!-- <PersonalExploration /> -->
        </v-col>
        <v-col class="pr-0">
          <MainProgrammingTools />
          <Hobbies />
          <v-img
            :src="'./undraw_maker_launch_crhe.svg'"
            contain
            :width="250"
            class="mx-auto"
          />
          <Formations />
          <Projects />
          <v-img
            :src="'./undraw_delivery_address_03n0.png'"
            contain
            :width="200"
            class="mx-auto"
          />
        </v-col>
      </v-row>
      <v-row class="pa-2">
        <v-col class="pr-0">
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
div#body {
  background: url('./decore.png');
  background-size: contain;
  background-color: #e5e3e6;
}
div#belly {
  border-bottom: 3px solid #c5a28c;
  background-color: rgba(239, 239, 239, 0.5);
  color: #283335;
}

div.title {
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: bold;
}
div.date {
  font-size: 0.8rem;
}
div.subtitle {
  font-size: 0.9rem;
  font-weight: bold;
  color: #3e6abf;
}
div.subtitle span {
  font-size: 0.9rem;
}
div.text {
  font-size: 0.9rem;
  color: #858282 !important;
}

ul li {
  font-weight: bold;
  font-size: 0.9rem;
}

span.indentation {
  display: inline-block;
  height: 20px;
  width: 15px;
  border-left: 5px solid #c5a28c;
  border-right: 5px solid #c5a28c;
  margin-right: 10px;
  font-style: italic;
  transform: skew(-20deg);
}
section {
  margin-left: 5px;
}
</style>
