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
import { useMainStore } from '~/store/profile';

export default {
  setup() {
    return { profile: useMainStore() }
  }
}
</script>
