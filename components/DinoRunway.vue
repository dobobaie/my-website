<template>
  <div class="dino-runway" aria-hidden="true">
    <div class="ground" />
    <div class="dino-jumper">
      <img class="dino" src="/google/dinosaur.png" alt="" />
    </div>
    <img class="cactus" src="/google/cactus.png" alt="" />
  </div>
</template>

<style scoped>
.dino-runway {
  position: relative;
  height: 140px;
  margin-top: 18px;
  overflow: hidden;
  --runway-cycle: 2.6s;
  --runway-width: 820px;
  --ground-h: 14px;
  --feet-y: var(--ground-h);
}

.ground {
  position: absolute;
  inset: auto 0 0 0;
  height: var(--ground-h);
  background: url('/google/ground.png') repeat-x;
  background-size: auto 100%;
  background-position-y: center;
  animation: ground-scroll 0.6s linear infinite;
  opacity: 0.92;
}

@keyframes ground-scroll {
  from { background-position-x: 0; }
  to   { background-position-x: -240px; }
}

.dino-jumper {
  position: absolute;
  bottom: var(--feet-y);
  left: 64px;
  width: 70px;
  height: 61px;
  animation: dino-jump var(--runway-cycle) cubic-bezier(.22,.61,.36,1) infinite;
}

.dino {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: bottom center;
  animation: dino-bob 0.32s steps(2, end) infinite;
  filter: drop-shadow(0 2px 0 rgba(0,0,0,0.18));
}

@keyframes dino-jump {
  0%, 73%, 100% { transform: translateY(0); }
  82%           { transform: translateY(-62px); }
  91%           { transform: translateY(0); }
  93%           { transform: translateY(-3px); }
  95%           { transform: translateY(0); }
}

/* Subtle running tilt — only when feet are on the ground */
@keyframes dino-bob {
  0%   { transform: translateY(0)   rotate(-0.5deg); }
  100% { transform: translateY(-1px) rotate(0.5deg); }
}

.cactus {
  position: absolute;
  bottom: var(--feet-y);
  left: var(--runway-width);
  width: 38px;
  height: auto;
  animation: cactus-run var(--runway-cycle) linear infinite;
  filter: drop-shadow(0 2px 0 rgba(0,0,0,0.18));
}

@keyframes cactus-run {
  from { transform: translateX(0); }
  to   { transform: translateX(calc(-1 * (var(--runway-width) + 96px))); }
}

@media (prefers-reduced-motion: reduce) {
  .dino-jumper, .dino, .cactus, .ground { animation: none !important; }
  .cactus { left: auto; right: 80px; }
}
</style>
