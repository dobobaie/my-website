<template>
  <v-sheet
    width="850"
    elevation="5"
    color="#E5E3E6"
    class="pt-2"
    style="overflow: hidden"
  >
    <Header />
    <Introduction />
    <Content />
  </v-sheet>
</template>

<script>
import Header from '~/components/Header.vue'
import Introduction from '~/components/Introduction.vue'
import Content from '~/components/Body.vue'

export default {
  components: {
    Header,
    Introduction,
    Content,
  },
}
</script>
