<template>
  <v-container class="pa-1 text-right">
    <v-btn
      v-for="(link, index) in profile.externalLinks"
      :key="'link_' + index"
      :href="link.link"
      target="_blank"
      rel="noopener"
      size="small"
      variant="text"
      width="100%"
      :ripple="false"
      class="ext-btn"
    >
      <span class="ext-label">{{ link.shortName }}</span>
      <template v-slot:append>
        <v-icon :icon="link.icon" :color="link.color" />
      </template>
    </v-btn>
  </v-container>
</template>

<script>
import { useMainStore } from '~/store/profile';

export default {
  setup() {
    return { profile: useMainStore() }
  }
}
</script>

<style scoped>
:deep() div.v-responsive__content {
  width: auto !important;
}
.ext-btn {
  justify-content: flex-end;
  height: 30px;
}
.ext-btn .ext-label {
  font-size: 0.85rem;
  letter-spacing: 0.01em;
}
</style>
