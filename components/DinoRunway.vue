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
  height: 110px;
  margin-top: 18px;
  overflow: hidden;
  --runway-cycle: 2.6s;
  --runway-width: 820px;
}

.ground {
  position: absolute;
  inset: auto 0 0 0;
  height: 22px;
  background: url('/google/ground.png') repeat-x;
  background-size: 240px 22px;
  background-position-y: bottom;
  animation: ground-scroll 0.55s linear infinite;
  opacity: 0.95;
}

@keyframes ground-scroll {
  from { background-position-x: 0; }
  to   { background-position-x: -240px; }
}

.dino-jumper {
  position: absolute;
  bottom: 18px;
  left: 64px;
  width: 70px;
  height: 75px;
  animation: dino-jump var(--runway-cycle) cubic-bezier(.22,.61,.36,1) infinite;
}

.dino {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: bottom center;
  animation: dino-bob 0.16s steps(2, end) infinite;
  filter: drop-shadow(0 2px 0 rgba(0,0,0,0.15));
}

@keyframes dino-jump {
  0%, 55%, 100% { transform: translateY(0); }
  68%           { transform: translateY(-58px); }
  82%           { transform: translateY(0); }
  85%           { transform: translateY(-3px); }
  90%           { transform: translateY(0); }
}

@keyframes dino-bob {
  0%   { transform: translateY(0)     scale(1, 1); }
  100% { transform: translateY(-1.5px) scale(1.02, 0.97); }
}

.cactus {
  position: absolute;
  bottom: 18px;
  left: var(--runway-width);
  width: 32px;
  height: auto;
  animation: cactus-run var(--runway-cycle) linear infinite;
  filter: drop-shadow(0 2px 0 rgba(0,0,0,0.15));
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
