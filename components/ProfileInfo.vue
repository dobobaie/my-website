<template>
  <v-btn
    v-for="(info, index) in profile.info"
    :key="'info_' + index"
    :prepend-icon="info.icon"
    size="small"
    variant="text"
    width="100%"
    :ripple="false"
  >{{ info.shortName }}</v-btn>
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
button.v-btn {
  justify-content: space-between;
  height: 30px;
}
</style>
