<template>
  <div class="loadingContainer">
    <div class="glowLoader"></div>
  </div>
  <div class="loadingContainer interior">
    <div class="glowLoader"></div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
$loader-color: #dfefff;
$loader-size: 16rem;
$loader-thickness: 0.3rem;
$loader-glow-size: 0.4rem;
$loader-glow-opacity: 0.9;
$loader-timing: ease-in-out;

.loadingContainer {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &.interior .glowLoader {
    transform: scale(0.75);

    &:before,
    &:after {
      animation-delay: 0s;
    }
  }
}

.glowLoader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: $loader-size;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-timing-function: $loader-timing;
    animation-delay: 0.3s;
    filter: drop-shadow(0 0 $loader-glow-size rgba($loader-color, $loader-glow-opacity));
  }
  &:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 $loader-thickness $loader-color;
    animation-name: pulsA;
  }
  &:after {
    width: calc(100% - #{$loader-thickness}* 2);
    padding-bottom: calc(100% - #{$loader-thickness}* 2);
    box-shadow: 0 0 0 0 $loader-color;
    animation-name: pulsB;
  }
}

@keyframes pulsA {
  0% {
    box-shadow: inset 0 0 0 $loader-thickness $loader-color;
    opacity: 1;
  }
  50%,
  100% {
    box-shadow: inset 0 0 0 0 $loader-color;
    opacity: 0;
  }
}

@keyframes pulsB {
  0%,
  50% {
    box-shadow: 0 0 0 0 $loader-color;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 $loader-thickness $loader-color;
    opacity: 1;
  }
}
</style>
