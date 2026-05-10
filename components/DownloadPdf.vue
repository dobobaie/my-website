<template>
  <button
    class="pdf-fab no-print"
    type="button"
    :disabled="busy"
    aria-label="Download CV as PDF"
    title="Download as PDF"
    @click="onClick"
  >
    <svg v-if="!busy" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"
      />
    </svg>
    <span v-else class="spinner" aria-hidden="true" />
    <span class="label">{{ busy ? 'Building…' : 'PDF' }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const busy = ref(false)

// We render the CV directly to a real PDF file the visitor can save, share,
// or print. window.print() was unreliable: it produced a screenshot-quality
// browser dialog, dropped most of the colored backgrounds, and split mid-row
// across pages. html2pdf rasterises #cv-root once at 2× pixel density and
// places the image on A4 pages, giving a consistent, attachment-ready file
// regardless of the visitor's browser.
async function onClick() {
  if (typeof window === 'undefined' || busy.value) return
  const cv = document.getElementById('cv-root') as HTMLElement | null
  if (!cv) return

  busy.value = true
  // The "exporting" class on <body> hides chrome that should not appear in
  // the export (this floating button, the dino runway). Cleared on finish.
  document.body.classList.add('pdf-exporting')

  try {
    // Wait one frame so the disabled/busy state paints before we freeze the DOM.
    await new Promise(requestAnimationFrame)

    const html2pdfMod = await import('html2pdf.js')
    const html2pdf = html2pdfMod.default || html2pdfMod

    await html2pdf()
      .set({
        margin: [6, 6, 6, 6],
        filename: 'eddy-mhalli-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#e5e3e6',
          windowWidth: cv.scrollWidth,
          // Make sure the entire CV is laid out before capture,
          // even if the live page was scrolled.
          scrollX: 0,
          scrollY: 0,
          logging: false,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compress: true,
        },
        pagebreak: { mode: ['css', 'legacy', 'avoid-all'] },
      })
      .from(cv)
      .save()
  } finally {
    document.body.classList.remove('pdf-exporting')
    busy.value = false
  }
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
.pdf-fab:hover:not([disabled]) {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(26, 45, 59, 0.45);
  background: #243f53;
}
.pdf-fab:active:not([disabled]) {
  transform: translateY(0);
}
.pdf-fab[disabled] {
  cursor: progress;
  opacity: 0.85;
}
.pdf-fab svg { display: block; }
.pdf-fab .label { line-height: 1; }

.spinner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  animation: pdf-spin 0.8s linear infinite;
}
@keyframes pdf-spin {
  to { transform: rotate(360deg); }
}
</style>
