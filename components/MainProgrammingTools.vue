<template>
  <div class="mb-2">
    <div class="title"><span class="indentation" />Main programming tools</div>
    <Chips
      :pins="profile.mainProgrammingTools"
      max-width="40"
      class="tools-chips"
    />
  </div>
</template>

<style scoped>
.tools-chips {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
:deep(.v-chip) {
  background: #fff !important;
  border: 1px solid #d6d2cf !important;
}
</style>

<script>
import { useMainStore } from '~/store/profile';

export default {
  setup() {
    return { profile: useMainStore() }
  }
}
</script>
