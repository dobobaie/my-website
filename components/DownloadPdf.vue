<template>
  <button
    class="pdf-fab no-print"
    type="button"
    aria-label="Download CV as PDF"
    title="Download as PDF"
    @click="onClick"
  >
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"
      />
    </svg>
    <span class="label">PDF</span>
  </button>
</template>

<script setup lang="ts">
function onClick() {
  if (typeof window === 'undefined') return
  window.print()
}
</script>

<style scoped>
.pdf-fab {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 0;
  cursor: pointer;
  background: #1a2d3b;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  box-shadow: 0 6px 18px rgba(26, 45, 59, 0.35);
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}
.pdf-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(26, 45, 59, 0.45);
  background: #243f53;
}
.pdf-fab:active {
  transform: translateY(0);
}
.pdf-fab svg { display: block; }
.pdf-fab .label { line-height: 1; }
</style>
