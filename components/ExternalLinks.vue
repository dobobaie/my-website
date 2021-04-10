<template>
  <div class="text-right">
    <v-btn
      v-for="(link, index) in profile.externalLinks"
      :key="'link_' + index"
      :color="link.color"
      class="mx-2"
      small
      dense
      text
    >
      <span class="mr-2 grey--text text--lighten-2">{{ link.shortName }}</span>
      <v-icon>{{ link.icon }}</v-icon>
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
}
</style>
