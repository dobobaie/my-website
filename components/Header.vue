<template>
  <div id="header"class="pa-3">
    <Languages />
    <Profile />
    <ProfileInfo />
    <ExternalLinks />
    <MainProgrammingTools />
    <Hobbies />
  </div>
</template>

<script>
import Profile from '~/components/Profile.vue'
import ProfileInfo from '~/components/ProfileInfo.vue'
import Languages from '~/components/Languages.vue'
import ExternalLinks from '~/components/ExternalLinks.vue'
import MainProgrammingTools from './MainProgrammingTools'
import Hobbies from './Hobbies'

export default {
  components: {
    Profile,
    ProfileInfo,
    Languages,
    ExternalLinks,
    MainProgrammingTools,
    Hobbies,
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
