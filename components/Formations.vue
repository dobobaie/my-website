<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Formations</div>
    <section
      v-for="(formation, index) in profile.formations"
      :key="'formation_' + index"
      class="py-2 form-item"
    >
      <div class="subtitle">
        { {{ formation.name }} }
        <span class="dash"> — </span>
        <span class="role">{{ formation.status }}</span>
      </div>
      <div class="date">
        <v-icon size="14">mdi-calendar</v-icon>
        {{ formation.start_date }} → {{ formation.end_date }}
        <template v-if="formation.locality">
          &nbsp;·&nbsp;<v-icon size="14">mdi-map-marker</v-icon>
          {{ formation.locality }}
        </template>
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
  setup() { return { profile: useMainStore() } }
}
</script>

<style scoped>
.form-item {
  border-left: 3px solid #c5a28c;
  padding-left: 12px;
  margin-bottom: 6px !important;
}
.dash { color: #c5a28c; }
.role { color: #1a2d3b; font-weight: 600; }
</style>
