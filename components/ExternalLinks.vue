<template>
  <v-container class="text-right">
    <v-btn
      v-for="(link, index) in profile.externalLinks"
      :key="'link_' + index"
      :append-icon="link.icon"
      size="small"
      variant="text"
      :ripple="false"
    >
      {{ link.shortName }}
      <template v-slot:append>
        <v-icon :color="link.color"></v-icon>
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
</style>
