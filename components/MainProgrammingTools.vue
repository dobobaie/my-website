<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Main programming tools</div>
    <Chips
      :pins="profile.mainProgrammingTools"
      max-width="50"
      class="text-center"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    profile: 'profile/get',
  }),
}
</script>
