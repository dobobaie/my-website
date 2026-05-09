<template>
  <v-card elevation="0" color="transparent" class="text-center" dark>
    <div class="mt-1">
      <v-avatar
        size="120"
        class="profile-avatar"
      >
        <v-img
          :alt="profile.name"
          :src="profile.picture"
          cover
        />
      </v-avatar>
    </div>
    <v-card-title class="d-block pa-2 mt-1 profile-name">
      {{ profile.name }}
    </v-card-title>
  </v-card>
</template>

<style scoped>
.profile-avatar {
  border: 3px solid #c5a28c;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
}
.profile-name {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}
</style>

<script>
import { useMainStore } from '~/store/profile';

export default {
  setup() {
    return { profile: useMainStore() }
  }
}
</script>
