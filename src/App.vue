<script setup>
const qyoh = useQyohStore();

const diamondIcon = new URL(`../assets/diamond.png`, import.meta.url).href;
</script>

<template>
  <Title />

  <TPSelect />

  <ShowCase />

  <iframe
    src="https://www.youtube.com/embed/vfX2qO_H2Xw"
    class="bg-white/25 w-[90%] max-w-[800px] p-3/ mx-auto border-[1px] border-white/25 rounded-lg aspect-video"
  />

  <div class="bg-white/25 p-5 mt-10 border-[1px] border-white/25 text-center">
    made by: OwOmelon#5644
  </div>

  <BGImage />
  <!-- <test /> -->
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  // background-color: #13131e;
  background-color: black;
}

#app {
  display: grid;
  gap: 2rem;
  padding-top: 2em;
  // margin: 2em;
  color: #e5e7eb;
  font-family: "Poppins", sans-serif;
}

/* //////////////////// */

.fade-enter-active,
.fade-leave-active {
  transition: all 150ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right {
  &-enter-active,
  &-leave-active {
    transition: all 300ms;
  }

  &-enter-from {
    transform: translateX(60px);
    opacity: 0;
  }

  &-leave-to {
    transform: translateX(-60px);
    opacity: 0;
  }
}

.slide-left {
  &-enter-active,
  &-leave-active {
    transition: all 300ms;
  }

  &-enter-from {
    transform: translateX(-60px);
    opacity: 0;
  }

  &-leave-to {
    transform: translateX(60px);
    opacity: 0;
  }
}

.loading {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.5) 10%,
    rgba(255, 255, 255, 0.25) 20%,
    rgba(255, 255, 255, 0.25) 100%
  );
  background-size: 200% 100%;
  background-position: 50% 0;

  animation: loading 1200ms 500ms linear infinite;
}

@keyframes loading {
  100% {
    background-position: -150% 0;
  }
}

/* //////////////////// */

img {
  image-rendering: pixelated;
}

.box:hover .text {
  top: -3.5rem;
  opacity: 1;
}
</style>
