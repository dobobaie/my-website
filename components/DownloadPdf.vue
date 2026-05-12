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

// We capture the CV at its natural source width (the v-sheet width prop)
// and let jsPDF scale the resulting canvas down to fit the A4 page. The
// alternative — forcing a 794 px clone to match A4 at 96 dpi — clips the
// right edge because the inner Vuetify columns/chips were sized for the
// original 850 px sheet and overflow when squeezed narrower.
const SOURCE_WIDTH_PX = 850

async function onClick() {
  if (typeof window === 'undefined' || busy.value) return
  const cv = document.getElementById('cv-root') as HTMLElement | null
  if (!cv) return

  busy.value = true
  document.body.classList.add('pdf-exporting')

  try {
    // Make sure all webfonts (mdi icons) and images have actually loaded
    // before we freeze the DOM into a canvas, otherwise glyphs render as
    // "□" boxes and photos come out blank.
    if ((document as any).fonts?.ready) {
      try { await (document as any).fonts.ready } catch {}
    }
    await waitForImages(cv)

    // One paint cycle so the disabled/busy state and the .pdf-exporting
    // class are committed before the capture begins.
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)))

    const html2pdfMod: any = await import('html2pdf.js')
    const html2pdf = html2pdfMod.default || html2pdfMod

    await html2pdf()
      .set({
        margin: 0,
        filename: 'eddy-mhalli-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 3,
          useCORS: true,
          allowTaint: false,
          backgroundColor: '#e5e3e6',
          windowWidth: SOURCE_WIDTH_PX,
          width: SOURCE_WIDTH_PX,
          scrollX: 0,
          scrollY: 0,
          logging: false,
          // Mutate the cloned DOM (not the live page) so the capture is
          // taken from a stable, full-width copy of the CV without any of
          // our transient UI chrome.
          onclone: (clonedDoc: Document) => {
            const root = clonedDoc.getElementById('cv-root') as HTMLElement | null
            if (root) {
              root.style.width = `${SOURCE_WIDTH_PX}px`
              root.style.maxWidth = `${SOURCE_WIDTH_PX}px`
              root.style.margin = '0'
              root.style.boxShadow = 'none'
              root.style.transform = 'none'
              // Lifting the overflow:hidden the live sheet has lets html2canvas
              // render anything that would otherwise be clipped if a child
              // element overshoots the sheet by a pixel or two.
              root.style.overflow = 'visible'
            }
            // Hard-strip the bits that should never appear in a PDF, in case
            // the body class didn't make it onto the cloned document.
            const removeSelectors = [
              '.pdf-fab',
              '.dino-runway',
              '#footer-band',
              '.cta-band',
            ]
            for (const sel of removeSelectors) {
              clonedDoc.querySelectorAll(sel).forEach((n) => n.remove())
            }
            // Reveal-on-scroll elements may not have been triggered for
            // sections still below the fold; force them visible in the clone.
            clonedDoc.querySelectorAll<HTMLElement>('.reveal-init').forEach((el) => {
              el.style.opacity = '1'
              el.style.transform = 'none'
            })
            // Encourage the height-based pagebreak to land on the gap
            // between cards rather than mid-description. Only the heaviest
            // wrappers — experiences and formations — get the avoid hint;
            // tagging every element triggers html2pdf to fall back to a
            // hard split that breaks layout.
            clonedDoc.querySelectorAll<HTMLElement>('.exp-item, .form-item').forEach((el) => {
              el.style.pageBreakInside = 'avoid'
              ;(el.style as any).breakInside = 'avoid'
            })
          },
        },
        jsPDF: {
          unit: 'pt',
          format: 'a4',
          orientation: 'portrait',
          compress: true,
        },
        pagebreak: {
          // 'css' obeys break-inside: avoid declarations from onclone;
          // 'legacy' is the height-based fallback that actually produces
          // multi-page output. Forcing harder breaks (avoid-all, or a
          // pagebreak.before selector) made things worse on this two-column
          // flex layout — it left big empty bands or pushed the entire CV
          // onto page 2 — so we stick with the gentle pair.
          mode: ['css', 'legacy'],
        },
      })
      .from(cv)
      .save()
  } finally {
    document.body.classList.remove('pdf-exporting')
    busy.value = false
  }
}

function waitForImages(root: HTMLElement): Promise<void> {
  const imgs = Array.from(root.querySelectorAll('img'))
  if (imgs.length === 0) return Promise.resolve()
  return Promise.all(
    imgs.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve()
      return new Promise<void>((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true })
        img.addEventListener('error', () => resolve(), { once: true })
      })
    })
  ).then(() => undefined)
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
