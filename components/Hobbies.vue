<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Hobbies</div>
    <v-row dense>
      <v-col
        v-for="(hobbit, index) in profile.hobbies"
        :key="'hobbit_' + index"
        class="text-center hobby"
        cols="3"
      >
        <v-icon size="40">{{ hobbit.icon }}</v-icon>
        <div class="subtitle hobby-name">{ {{ hobbit.name }} }</div>
        <div class="text" v-html="hobbit.short_description" />
      </v-col>
    </v-row>
    <div class="date hobby-tail">{{ profile.hobbit.description }}</div>
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
  transition: transform 220ms ease, color 220ms ease;
}
.hobby {
  padding-top: 8px;
  padding-bottom: 8px;
}
.hobby:hover .v-icon {
  transform: translateY(-2px) rotate(-4deg);
  color: #c5a28c;
}
.hobby-name {
  font-size: 0.78rem !important;
  margin-top: 2px;
}
.hobby-tail {
  margin-top: 6px;
  text-align: center;
  font-style: italic;
}
</style>
