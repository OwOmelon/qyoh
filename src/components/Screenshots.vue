<script setup>
import { Icon } from "@iconify/vue";

const qyoh = useQyohStore();

const screenshotMaps = ["mountain1", "mountain2", "carnival", "village"];
const activeMap = ref(0);

const screenshotDayCycles = [
	{
		name: "day",
		icon: "tabler:sun-high",
	},
	{
		name: "sunset",
		icon: "tabler:sunset-2",
	},
	{
		name: "night",
		icon: "tabler:moon",
	},
];
const activeDayCyle = ref(0);

const imageTransition = ref("slide-right");

const screenshots = computed(() => {
	return screenshotMaps.map((map, index) => {
		return {
			map: map,
			imgs: screenshotDayCycles.map((cycle) => {
				return new URL(
					`../assets/${qyoh.activeDiamond}/screenshots/L${index + 1}-${
						cycle.name
					}.png`,
					import.meta.url
				).href;
			}),
		};
	}, {});
});

const currentImage = computed(() => {
	return screenshots.value[activeMap.value].imgs[activeDayCyle.value];
});

watch(
	() => qyoh.activeDiamond,
	(x) => {
		imageTransition.value = "fade";
	}
);
</script>

<template>
	<div class="relative grid place-items-center w-full h-full overflow-hidden">
		<Transition
			:name="imageTransition"
			leave-active-class="absolute duration-150"
		>
			<img :key="currentImage" :src="currentImage" class="h-full" />
		</Transition>
		<div
			class="absolute bottom-0 left-0 flex justify-center items-center gap-4 bg-[#191925]/75 w-full h-[56px] hover:h-[80px] text-white opacity-50 hover:opacity-100 duration-500 hover:duration-150"
		>
			<button
				@click="
					activeMap > 0
						? activeMap--
						: (activeMap = screenshotMaps.length - 1),
						(imageTransition = 'img-slide-left')
				"
				class="icon-btn mr-10"
			>
				<Icon
					icon="akar-icons:circle-triangle-left-fill"
					class="w-[30px] h-[30px]"
				/>
			</button>
			<div
				v-for="(cycle, index) in screenshotDayCycles"
				:key="index"
				class="relative h-full grid place-items-center"
			>
				<Transition name="fade">
					<div
						v-show="activeDayCyle === index"
						class="absolute top-0 left-0 bg-white w-full h-1"
					/>
				</Transition>
				<button
					@click="(activeDayCyle = index), (imageTransition = 'fade')"
					class="icon-btn"
				>
					<Icon :icon="cycle.icon" class="w-[40px] h-[40px]" />
				</button>
			</div>
			<button
				@click="
					activeMap < screenshotMaps.length - 1
						? activeMap++
						: (activeMap = 0),
						(imageTransition = 'img-slide-right')
				"
				class="icon-btn ml-10"
			>
				<Icon
					icon="akar-icons:circle-triangle-right-fill"
					class="w-[30px] h-[30px]"
				/>
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.img-slide-right {
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

.img-slide-left {
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

.icon-btn {
	transition: all 150ms;

	&:hover {
		transform: scale(1.2);
	}
}
</style>
