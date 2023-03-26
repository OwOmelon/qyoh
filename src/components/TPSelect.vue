<script setup>
import { Icon } from "@iconify/vue";

const qyoh = useQyohStore();
const packDisplayTransition = ref("slide-card-right");

const packs = computed(() => {
	const downloadLinks = {
		qyoh: {
			pack: "https://drive.google.com/file/d/12r2SrUZWoIu3PQ1XeILWHJJSp_n_Gw-M/view?usp=share_link",
		},
		qualm: {
			pack: "https://drive.google.com/file/d/1r8khHGr7QiDoUs8daYyO0puRF1O8zPPR/view?usp=share_link",
			filter:
				"https://drive.google.com/file/d/1Zo9dvcWIXXy7dE_verH6qr3gY350NuZk/view?usp=share_link",
		},
		exile: {
			pack: "https://drive.google.com/file/d/1pEC6y9sgSzkZTsfcXcKzoevjsJUnJFFk/view?usp=share_link",
			filter:
				"https://drive.google.com/file/d/1fWfilCLNz7747ThFZbZCT2n_VeGyP3cO/view?usp=share_link",
		},
	};

	return qyoh.diamonds.reduce((allDiamonds, diamond) => {
		return {
			...allDiamonds,
			[diamond]: {
				icon: new URL(
					`../assets/icons/${diamond}_icon.png`,
					import.meta.url
				).href,
				name: `${diamond.charAt(0).toUpperCase() + diamond.slice(1)} [16x]`,
				downloadLinks: downloadLinks[diamond],
			},
		};
	}, {});
});

const switchActiveTP = (direction) => {
	const activeTPIndex = qyoh.diamonds.indexOf(qyoh.activeDiamond);

	switch (direction) {
		case "prev":
			packDisplayTransition.value = "slide-card-left";

			if (activeTPIndex - 1 >= 0) {
				qyoh.activeDiamond = qyoh.diamonds[activeTPIndex - 1];
			} else {
				qyoh.activeDiamond = qyoh.diamonds[2];
			}

			break;

		case "next":
			packDisplayTransition.value = "slide-card-right";

			if (activeTPIndex + 1 < 3) {
				qyoh.activeDiamond = qyoh.diamonds[activeTPIndex + 1];
			} else {
				qyoh.activeDiamond = qyoh.diamonds[0];
			}

			break;
	}
};
</script>

<template>
	<div class="flex items-center w-fit mx-auto text-neutral-300/">
		<div class="relative">
			<Transition
				:name="packDisplayTransition"
				leave-active-class="absolute duration-300"
			>
				<div
					:key="qyoh.activeDiamond"
					class="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-5 bg-white/25 p-3 border-[1px] border-white/25 rounded backdrop-blur-sm"
				>
					<button
						@click="switchActiveTP('prev')"
						class="absolute top-1/2 left-5 md:-left-20 hover:scale-125 active:scale-100 -translate-y-1/2 duration-150"
					>
						<Icon
							icon="akar-icons:circle-triangle-left-fill"
							class="w-8 h-8"
						/>
					</button>

					<img
						:src="packs[qyoh.activeDiamond].icon"
						class="w-28 md:w-32 lg:w-36 aspect-square border-[1px] border-white/25 rounded overflow-hidden"
					/>
					<div class="flex flex-col text-center md:text-left">
						<p class="text-2xl lg:text-3xl font-bold">
							{{ packs[qyoh.activeDiamond].name }}
						</p>
						<p class="mb-auto text-lg lg:text-xl">
							Mixed and Edited by OwOmelon
						</p>

						<div
							class="align-self-end flex gap-5 mt-4 text-xs lg:text-sm"
						>
							<a
								:href="packs[qyoh.activeDiamond].downloadLinks.pack"
								target="_blank"
								class="flex gap-2 justify-center items-center bg-white/25 w-full p-3 border-[1px] border-white/25 rounded hover:-translate-y-1 active:scale-90 duration-150"
								><Icon icon="pajamas:download" /> Texture Pack</a
							>
							<a
								:href="packs[qyoh.activeDiamond].downloadLinks.filter"
								target="_blank"
								:class="[
									packs[qyoh.activeDiamond].downloadLinks.filter
										? ''
										: 'opacity-0 pointer-events-none',
									'flex gap-2 justify-center items-center bg-white/25 w-full p-3 border-[1px] border-white/25 rounded hover:-translate-y-1 active:scale-90 duration-150',
								]"
								><Icon icon="pajamas:download" /> Filter Overlay</a
							>
						</div>
					</div>

					<button
						@click="switchActiveTP('next')"
						class="absolute top-1/2 right-5 md:-right-20 hover:scale-125 active:scale-100 -translate-y-1/2 duration-150"
					>
						<Icon
							icon="akar-icons:circle-triangle-right-fill"
							class="w-8 h-8"
						/>
					</button>
				</div>
			</Transition>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.slide-card-right {
	&-enter-active,
	&-leave-active {
		transition: all 300ms;
	}

	&-enter-from,
	&-leave-to {
		opacity: 0;
		scale: 0.9;
	}

	&-enter-from {
		transform: translateX(90px);
	}

	&-leave-to {
		transform: translateX(-90px);
	}
}

.slide-card-left {
	&-enter-active,
	&-leave-active {
		transition: all 300ms;
	}

	&-enter-from,
	&-leave-to {
		opacity: 0;
		scale: 0.9;
	}

	&-enter-from {
		transform: translateX(-90px);
	}

	&-leave-to {
		transform: translateX(90px);
	}
}
</style>
