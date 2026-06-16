<template>
  <v-app>
    <NuxtLayout/>
  </v-app>
</template>

<style>
body, div.v-application {
  background: url('./background.jpg') repeat;
  background-size: 40%;
}
/* Center the v-application content horizontally and vertically on the page */
div.v-application .v-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-btn {
  text-transform: none;
}
</style>

