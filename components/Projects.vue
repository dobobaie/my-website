<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Projects</div>
    <div class="subtitle">Ask me directly if you want to know... =)</div>
    <section
      v-for="(exp, index) in profile.projects"
      :key="'experience_' + index"
    >
      <div class="subtitle">{ {{ exp.name }} }</div>
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
