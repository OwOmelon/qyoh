<script setup>
const qyoh = useQyohStore();
</script>

<template>
  <iframe
    src="https://www.youtube.com/embed/vfX2qO_H2Xw"
    class="w-[650px] aspect-video mx-auto rounded-lg"
  />
  <h1 class="my-16 text-center text-2xl text-neutral-300 font-bold">
    made for bedrock 1.18
  </h1>
  <Qyoh />
  <!-- <test /> -->
</template>

<style>
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
  background-color: #13131e;
}

#app {
  padding: 5em 0;
  color: #262626;
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

img {
  image-rendering: pixelated;
}
</style>
