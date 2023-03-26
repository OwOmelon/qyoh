<script setup>
import { Icon } from "@iconify/vue";

const qyoh = useQyohStore();

const screenshotMaps = [
	{
		name: "Futuristic House Mountain",
		url: "https://mcpedl.com/futuristic-house-mountain",
	},
	{
		name: "Futuristic House Mountain",
		url: "https://mcpedl.com/futuristic-house-mountain",
	},
	{
		name: "HareBell Village's Spring Festival",
		url: "https://www.planetminecraft.com/project/harebell-village-spring-festival",
	},
	{
		name: "Stella Rose Village",
		url: "https://www.9minecraft.net/stellas-rose-village-map/",
	},
];

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

const activeMap = ref(0);
const activeDayCyle = ref(0);

const imageTransition = ref("fade");

const screenshots = computed(() => {
	return screenshotMaps.map((map, index) => {
		return {
			map: map.name,
			url: map.url,
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

const showImage = ref(false);

watch(currentImage, (x) => {
	showImage.value = false;
});

watch(
	() => qyoh.activeDiamond,
	(x) => {
		imageTransition.value = "fade";
	}
);
</script>

<template>
	<div class="relative grid gap-3 w-full h-full rounded overflow-hidden">
		<div
			:class="[
				showImage ? 'bg-white/25' : 'loading',
				'row-span-5 aspect-video',
			]"
		>
			<Transition
				:name="imageTransition"
				:leave-active-class="
					imageTransition === 'fade'
						? 'absolute duration-150'
						: 'absolute duration-300'
				"
			>
				<img
					:key="currentImage"
					:src="screenshots[activeMap].imgs[activeDayCyle]"
					@load="showImage = true"
					:class="[showImage ? '' : 'opacity-0']"
				/>
			</Transition>
		</div>

		<a
			:href="screenshots[activeMap].url"
			target="_blank"
			class="lg:absolute lg:row-start-1 bg-white/25 p-2 border-[1px] border-white/25 lg:backdrop-blur-sm rounded text-white text-sm duration-150"
			>map: {{ screenshots[activeMap].map }}</a
		>

		<div
			class="lg:absolute lg:self-end lg:row-start-5 lg:row-end-6 flex justify-center items-center gap-4 bg-white/30 w-full h-20 lg:h-16 lg:hover:h-[80px] lg:mb-2 rounded text-white lg:opacity-75 lg:hover:opacity-100 lg:hover:backdrop-blur-sm duration-500 hover:duration-150"
		>
			<button
				@click="
					activeMap > 0
						? activeMap--
						: (activeMap = screenshotMaps.length - 1),
						(imageTransition = 'slide-left')
				"
				class="icon-btn"
			>
				<Icon
					icon="akar-icons:circle-triangle-left-fill"
					class="w-8/ h-8/ w-6 h-6"
				/>
			</button>

			<div class="flex gap-4 h-full mx-6">
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
						<Icon :icon="cycle.icon" class="w-10/ h-10/ w-8 h-8" />
					</button>
				</div>
			</div>

			<button
				@click="
					activeMap < screenshotMaps.length - 1
						? activeMap++
						: (activeMap = 0),
						(imageTransition = 'slide-right')
				"
				class="icon-btn"
			>
				<Icon
					icon="akar-icons:circle-triangle-right-fill"
					class="w-8/ h-8/ w-6 h-6"
				/>
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.icon-btn {
	transition: all 150ms;

	&:hover {
		transform: scale(1.2);
	}
}
</style>
