<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Hobbies</div>
    <v-row>
      <v-col
        v-for="(hobbie, index) in profile.hobbies"
        :key="'hobbie_' + index"
        class="text-center"
      >
        <v-icon size="45">{{ hobbie.icon }}</v-icon>
        <div class="subtitle">{ {{ hobbie.name }} }</div>
        <div class="text">{{ hobbie.short_description }}</div>
      </v-col>
    </v-row>
    <div class="date">{{ profile.hobbie.description }}</div>
  </div>
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
.v-icon {
  color: #1a2d3b;
}
</style>
