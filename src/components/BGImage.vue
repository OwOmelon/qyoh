<script setup>
const bg = ref(null);

const activeBG = ref(0);
const offset = ref(0);

const currentBG = computed(() => {
	return new URL(
		`../assets/bgimages/${activeBG.value % 16}.png`,
		import.meta.url
	).href;
});

const pageHeight = computed(() => {
	return document.body.scrollHeight;
});

const bgHeight = computed(() => {
	return bg.value.height;
});

function setOffset() {
	offset.value = window.scrollY;
}

setInterval(() => {
	activeBG.value++;
}, 10000 - 150);

// window.addEventListener("scroll", setOffset);
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
				class="bg-slide absolute -translate-x-1/2 scale-[3] md:scale-[2] brightness-50 z-[-1]"
			/>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>
.fade-bg-enter-active,
.fade-bg-leave-active {
	transition: opacity 150ms;
}

.fade-bg-enter-from,
.fade-bg-leave-to {
	opacity: 0;
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
