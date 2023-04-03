<script setup>
const bg = ref(null);

const activeBG = ref(0);

const currentBG = computed(() => {
	return getImage(activeBG.value);
});

const getImage = (index) => {
	return new URL(`../assets/bgimages/${index % 16}.png`, import.meta.url).href;
};

const transitionDuration = 150;
const imgChangeCoolDown = 10000;

setInterval(() => {
	activeBG.value++;
	// console.log("start", activeBG.value);

	let nextImg = new Image();
	nextImg.src = getImage(activeBG.value + 1);

	// nextImg.onload = () => {
	// 	console.log("loaded", nextImg.src);
	// };
}, imgChangeCoolDown - transitionDuration);
</script>

<template>
	<div
		class="fixed top-0 left-0 grid place-items-center w-screen h-screen overflow-hidden z-[-1]"
	>
		<Transition name="fade">
			<img
				ref="bg"
				:key="currentBG"
				:src="currentBG"
				class="bg-slide absolute -translate-x-1/2 scale-[3] md:scale-[2] brightness-50"
			/>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>
.fade-bg-enter-active {
	animation: img-enter 0.5s;
}

.fade-bg-leave-active {
	animation: img-leave 0.5s;
}

@keyframes img-enter {
	0% {
		opacity: 0;
	}

	70% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes img-leave {
	0% {
		opacity: 1;
	}

	70% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}

.bg-slide {
	animation: bg-slide 10s linear infinite;
}

@keyframes bg-slide {
	0% {
		left: 60%;
	}

	100% {
		left: 40%;
	}
}
</style>
