<template>
  <div class="mx-4 mt-4">
    <div class="left-title"><span class="indentation" />Hobbies</div>
    <v-row align-content="center">
      <v-col
        v-for="(hobbit, index) in profile.hobbies"
        :key="'hobbit_' + index"
        cols="3"
      >
        <v-icon size="30">{{ hobbit.icon }}</v-icon>
        <div>{{ hobbit.name }}</div>
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
  color: #f5f5f5;
}
</style>
