<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Formations</div>
    <section
      v-for="(formation, index) in profile.formations"
      :key="'formation_' + index"
    >
      <div class="subtitle">
        { {{ formation.name }} } - <span>{{ formation.status }}</span>
      </div>
      <div class="date">
        {{ formation.start_date }} - {{ formation.end_date }}
        <span v-if="formation.locality"> - {{ formation.locality }}</span>
      </div>
      <ul>
        <li
          v-for="(degree, index) in formation.degrees"
          :key="'degree_' + index"
        >
          {{ degree.name }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { useMainStore } from '~/store/profile';

export default {
  setup() {
    return { profile: useMainStore() }
  }
}
</script>
