<script setup>
import { Icon } from "@iconify/vue";

const qyoh = useQyohStore();

const count = ref(0);
const image = new URL(`../assets/bgimages/1.png`, import.meta.url).href;

const colors = ["red", "blue", "pink", "orange"];
const text = ["fuck yea", "jesus christ", "holy shit", "son of a bitch"];

setInterval(() => {
	count.value++;
}, 1850);

function test() {
	console.log("finish");
}
</script>

<template>
	<div class="fixed top-0 left-0 grid place-items-center w-full h-screen">
		<img
			:src="image"
			class="absolute top-0 h-1/4 aspect-video origin-top scale-150"
		/>

		<div class="bg-white w-24 p-2 aspect-square" />
	</div>
</template>

<style lang="scss" scoped></style>
