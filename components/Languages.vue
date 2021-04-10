<template>
  <div class="text-left ml-1">
    <v-btn
      v-for="(language, index) in profile.languages"
      :key="'language_' + index"
      min-height="0"
      min-width="25px"
      width="auto"
      max-width="150px"
      color="transparent"
      class="mx-2 pa-0"
      depressed
      dense
    >
      <v-img
        :alt="language.code"
        :src="language.picture"
        width="100%"
        height="100%"
        contain
      />
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
</style>
