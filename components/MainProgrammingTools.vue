<template>
  <div class="ml-4 mt-4">
    <div class="left-title"><span class="indentation" />Technical Skills</div>
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
