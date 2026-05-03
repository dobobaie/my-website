<template>
  <v-app>
    <NuxtLayout/>
    <DownloadPdf />
  </v-app>
</template>

<script setup>
import DownloadPdf from '~/components/DownloadPdf.vue'
</script>

<style>
body, div.v-application {
  background: url('./background.jpg') repeat;
  background-size: 40%;
}
.v-btn {
  text-transform: none;
}

/* --- scroll reveal --- */
.reveal-init {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 600ms ease, transform 600ms cubic-bezier(.22,.61,.36,1);
  will-change: opacity, transform;
}
.reveal-in {
  opacity: 1;
  transform: none;
}

/* --- tech-icon hover bobble --- */
.v-chip:has(.v-avatar) {
  transition: transform 220ms ease, box-shadow 220ms ease;
}
.v-chip:has(.v-avatar):hover {
  transform: translateY(-3px) rotate(-2deg);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  z-index: 2;
}

/* --- profile photo "breathe" --- */
#header .v-avatar {
  animation: profile-breathe 5.5s ease-in-out infinite;
  transition: transform 400ms ease;
}
#header .v-avatar:hover {
  animation-play-state: paused;
  transform: scale(1.04) rotate(-1deg);
}
@keyframes profile-breathe {
  0%, 100% { transform: scale(1)     rotate(0deg); }
  50%      { transform: scale(1.025) rotate(0.6deg); }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-init { opacity: 1; transform: none; transition: none; }
  #header .v-avatar { animation: none; }
}

/* --- print: render the page as a clean PDF --- */
@media print {
  @page { size: A4; margin: 10mm; }

  html, body, div.v-application {
    background: #fff !important;
    color: #000 !important;
  }
  .v-application__wrap { display: block !important; }

  .no-print,
  .pdf-fab,
  .dino-runway { display: none !important; }

  .v-sheet { box-shadow: none !important; }
  div#header { background-color: #1a2d3b !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  div#introduction { background-color: #c5a28c !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }

  .v-sheet[width], .v-sheet {
    width: 100% !important;
    max-width: 100% !important;
  }

  .reveal-init { opacity: 1 !important; transform: none !important; }

  section, .v-row { break-inside: avoid; page-break-inside: avoid; }

  #introduction:last-of-type { display: none !important; }
}
</style>
