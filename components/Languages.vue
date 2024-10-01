<template>
  <v-container class="pa-0">
    <v-btn
      v-for="(language, index) in profile.languages"
      :key="'language_' + index"
      color="transparent"
      size="small"
      variant="text"
    >
      <v-img
        :alt="language.code"
        :src="language.picture"
        width="auto"
        max-width="30px"
      />
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
