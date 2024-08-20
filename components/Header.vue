<template>
  <v-row id="header" class="py-1 px-2 pb-3">
    <v-col class="pa-0 d-flex flex-column justify-start">
      <Languages />
      <ProfileInfo />
    </v-col>
    <v-col class="pa-0">
      <Profile />
    </v-col>
    <v-col class="pa-0 d-flex justify-end">
      <ExternalLinks />
    </v-col>
  </v-row>
</template>

<script>
import Profile from '~/components/Profile.vue'
import ProfileInfo from '~/components/ProfileInfo.vue'
import Languages from '~/components/Languages.vue'
import ExternalLinks from '~/components/ExternalLinks.vue'

export default {
  components: {
    Profile,
    ProfileInfo,
    Languages,
    ExternalLinks,
  },
}
</script>

<style scoped>
div#header {
  background: url('./decore.png') top;
  background-size: contain;
  background-color: #1a2d3b;
  color: #fff;
}
</style>
