<template>
  <div class="text-left">
    <v-btn
      v-for="(info, index) in profile.info"
      :key="'info_' + index"
      class="mx-2 pa-0"
      color="grey lighten-2"
      small
      dense
      text
      exact
      dark
    >
      <v-icon>{{ info.icon }}</v-icon>
      <span class="ml-2">{{ info.shortName }}</span>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    profile: 'profile/get',
  }),
}
</script>

<style scoped>
/deep/ div.v-responsive__content {
  width: auto !important;
}
/deep/ button.v-btn {
  text-transform: initial;
  display: block;
}
</style>
