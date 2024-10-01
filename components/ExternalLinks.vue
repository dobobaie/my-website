<template>
  <v-btn
    v-for="(link, index) in profile.externalLinks"
    :key="'link_' + index"
    :prepend-icon="link.icon"
    size="small"
    variant="text"
    width="100%"
    :ripple="false"
    @click="openURL(link.link)"
  >
    <template v-slot:prepend>
      <v-icon :color="link.color"></v-icon>
    </template>
    {{ link.shortName }}
  </v-btn>
</template>

<script>
import { useMainStore } from '~/store/profile';

export default {
  setup() {
    return { profile: useMainStore() }
  },
  methods: {
    openURL(link) {
      if (link) {
        location.href = link;
      }
    }
  }
}
</script>

<style scoped>
:deep() div.v-responsive__content {
  width: auto !important;
}
button.v-btn {
  justify-content: space-between;
  height: 30px;
}
</style>
