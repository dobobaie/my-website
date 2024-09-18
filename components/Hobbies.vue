<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Hobbies</div>
    <v-row>
      <v-col
        v-for="(hobbit, index) in profile.hobbies"
        :key="'hobbit_' + index"
        class="text-center"
        cols="3"
      >
        <v-icon size="45">{{ hobbit.icon }}</v-icon>
        <div class="subtitle">{ {{ hobbit.name }} }</div>
        <div class="text" v-html="hobbit.short_description" />
      </v-col>
    </v-row>
    <div class="date">{{ profile.hobbit.description }}</div>
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
