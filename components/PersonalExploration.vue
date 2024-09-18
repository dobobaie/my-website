<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Personal Exploration</div>
    <section
      v-for="(exp, index) in profile.personalExploration"
      :key="'experience_' + index"
      class="mb-2"
    >
      <div class="subtitle" v-if="exp.name">{{ exp.name }}</div>
      <div class="text" v-html="exp.short_description" />
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
