<template>
  <v-sheet
    width="850"
    height="1200"
    elevation="5"
    color="#E5E3E6"
    class="pt-2"
    style="overflow: hidden"
  >
    <Header />
    <Introduction />
    <Body />
  </v-sheet>
</template>

<script>
import Header from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Body from '~/components/Body.vue'

export default {
  components: {
    Header,
    Introduction,
    Body,
  },
}
</script>
