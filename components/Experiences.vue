<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Experiences</div>
    <section
      v-for="(exp, index) in profile.experiences"
      :key="'experience_' + index"
      class="exp-item"
    >
      <div class="subtitle">
        <a
          v-if="exp.link"
          :href="exp.link"
          target="_blank"
          rel="noopener"
          class="exp-link"
        >{ {{ exp.name }} }</a>
        <span v-else>{ {{ exp.name }} }</span>
        <span class="dash"> — </span>
        <span class="role">{{ exp.status }}</span>
      </div>
      <div class="date">
        <v-icon size="14">mdi-calendar</v-icon>
        {{ exp.start_date }} → {{ exp.end_date }}
        <template v-if="exp.locality">
          &nbsp;·&nbsp;<v-icon size="14">mdi-map-marker</v-icon>
          {{ exp.locality }}
        </template>
      </div>
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

<style scoped>
ul { margin-left: 20px; }
ul li { font-weight: initial !important; }

.exp-item {
  position: relative;
  padding: 8px 10px 8px 16px;
  border-left: 3px solid #c5a28c;
  margin-bottom: 14px !important;
  border-radius: 0 6px 6px 0;
  transition: background-color 220ms ease, border-color 220ms ease;
}
.exp-item:hover {
  background-color: rgba(197, 162, 140, 0.08);
  border-left-color: #1a2d3b;
}
.exp-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dotted #3e6abf;
}
.exp-link:hover { color: #1a2d3b; border-bottom-color: #1a2d3b; }
.dash { color: #c5a28c; }
.role { color: #1a2d3b; font-weight: 600; }
</style>