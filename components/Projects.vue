<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Projects</div>
    <v-row dense>
      <v-col
        v-for="(exp, index) in profile.projects"
        :key="'project_' + index"
        cols="6"
      >
        <section class="proj-item mb-2">
          <div class="subtitle" v-if="exp.name">{ {{ exp.name }} }</div>
          <div class="text" v-html="exp.short_description" />
          <Chips :pins="exp.pins" />
        </section>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { useMainStore } from '~/store/profile';
import Chips from '~/components/Chips'

export default {
  components: {
    Chips,
  },
  setup() {
    return { profile: useMainStore() }
  }
}
</script>

<style scoped>
.proj-item {
  padding: 6px 8px;
  border-radius: 6px;
  transition: background-color 220ms ease;
}
.proj-item:hover {
  background-color: rgba(197, 162, 140, 0.1);
}
</style>
