<template>
  <v-card elevation="0" color="transparent" class="text-center" dark>
    <div class="mt-1">
      <v-avatar size="100%" min-width="0px" max-width="100px" rounded="50%">
        <v-img :alt="profile.name" :src="profile.picture" contain />
      </v-avatar>
    </div>
    <v-card-title class="d-block pa-2 mt-n1">
      {{ profile.name }}
    </v-card-title>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    profile: 'profile/get',
  }),
}
</script>
