<template>
  <div class="mb-2">
    <!-- <div class="text-center">
      <v-icon>mdi-docker</v-icon>
      <v-icon>mdi-nuxt</v-icon>
      <v-icon>mdi-vuejs</v-icon>
    </div> -->
    <div class="title"><span class="indentation" />Experiences</div>
    <section
      v-for="(exp, index) in profile.experiences"
      :key="'experience_' + index"
    >
      <div class="subtitle">
        { {{ exp.name }} } - <span>{{ exp.status }}</span>
      </div>
      <div class="date">
        {{ exp.start_date }} - {{ exp.end_date }}
        <span v-if="exp.locality"> - {{ exp.locality }}</span>
      </div>
      <div class="text">{{ exp.short_description }}</div>
      <Chips :pins="exp.pins" />
    </section>
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
