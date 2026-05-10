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
  height: 160px;
  margin-top: 18px;
  overflow: hidden;
  --runway-cycle: 2.6s;
  --runway-width: 820px;
  --ground-h: 16px;
  --feet-y: var(--ground-h);
  --ink: rgba(26, 45, 59, 0.78);
  --ink-soft: rgba(26, 45, 59, 0.45);
}

/* CSS-drawn ground: solid baseline at the TOP of the ground div (so the
   dino's feet rest on it), with scrolling dotted debris below the line
   to suggest distant terrain. Cleaner than the original sprite, which
   tiled with visible gaps because the spritesheet packed multiple frames. */
.ground {
  position: absolute;
  inset: auto 0 0 0;
  height: var(--ground-h);
  background: linear-gradient(to bottom, var(--ink) 0 2px, transparent 2px 100%);
}
.ground::before {
  content: '';
  position: absolute;
  inset: 3px 0 0 0;
  /* Three staggered dashed layers — short rocks, longer pebbles, tiny grit —
     so the surface reads as terrain rather than a single repeating pattern. */
  background-image:
    linear-gradient(to right, var(--ink)      0 26px, transparent 26px 78px),
    linear-gradient(to right, var(--ink-soft) 0 12px, transparent 12px 44px),
    linear-gradient(to right, var(--ink-soft) 0 4px,  transparent 4px  19px);
  background-repeat: repeat-x, repeat-x, repeat-x;
  background-size: 78px 2px, 44px 2px, 19px 2px;
  background-position: 0 4px, 22px 7px, 9px 10px;
  animation: ground-scroll 0.55s linear infinite;
}

@keyframes ground-scroll {
  from { background-position: 0 4px,    22px 7px,  9px 10px; }
  to   { background-position: -78px 4px, -22px 7px, -10px 10px; }
}

.dino-jumper {
  position: absolute;
  bottom: var(--feet-y);
  left: 70px;
  width: 86px;
  height: 75px;
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
  82%           { transform: translateY(-68px); }
  91%           { transform: translateY(0); }
  93%           { transform: translateY(-4px); }
  95%           { transform: translateY(0); }
}

/* Subtle running tilt while feet are on the ground */
@keyframes dino-bob {
  0%   { transform: translateY(0)   rotate(-0.5deg); }
  100% { transform: translateY(-1px) rotate(0.5deg); }
}

.cactus {
  position: absolute;
  bottom: var(--feet-y);
  left: var(--runway-width);
  width: 46px;
  height: auto;
  animation: cactus-run var(--runway-cycle) linear infinite;
  filter: drop-shadow(0 2px 0 rgba(0,0,0,0.18));
}

@keyframes cactus-run {
  from { transform: translateX(0); }
  to   { transform: translateX(calc(-1 * (var(--runway-width) + 96px))); }
}

@media (prefers-reduced-motion: reduce) {
  .dino-jumper, .dino, .cactus, .ground::before { animation: none !important; }
  .cactus { left: auto; right: 80px; }
}
</style>
