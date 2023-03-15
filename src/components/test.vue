<script setup>
const qyoh = useQyohStore();

const active = ref(0);

const textures = computed(() => {
	const toolNames = ["sword", "pickaxe", "shovel", "axe", "hoe"];
	const toolMaterials = ["wood", "stone", "iron", "gold", "diamond"];
	const armorMaterials = ["leather", "chain", "iron", "gold", "diamond"];
	const ores = [
		"coal",
		"redstone",
		"lapis",
		"emerald",
		"iron",
		"gold",
		"diamond",
	];
	const screenshotMaps = ["mountain", "mountain", "carnival", "village"];
	const screenshotDayCycles = ["day", "sunset", "night"];

	return {
		tools: toolNames.reduce((allTools, tool) => {
			const addS = tool + "s";

			return {
				...allTools,
				[addS]: toolMaterials.map((material) => {
					return new URL(
						`../assets/${qyoh.activeDiamond}/items/${material}_${tool}.png`,
						import.meta.url
					).href;
				}),
			};
		}, {}),

		armor: armorMaterials.map((material) => {
			return new URL(
				`../assets/${qyoh.activeDiamond}/armor/${material}_armor.png`,
				import.meta.url
			).href;
		}),

		blocks: ores.map((ore) => {
			const diamondidentifier =
				ore === "diamond" ? `_${qyoh.activeDiamond}` : "";

			return [
				new URL(
					`../assets/blocks/${ore}_ore${diamondidentifier}.png`,
					import.meta.url
				).href,
				new URL(
					`../assets/blocks/${ore}_block${diamondidentifier}.png`,
					import.meta.url
				).href,
			];
		}),

		test: ores.reduce((allOres, ore) => {
			const diamondidentifier =
				ore === "diamond" ? `_${qyoh.activeDiamond}` : "";

			return {
				...allOres
				[ore]: [
				new URL(
					`../assets/blocks/${ore}_ore${diamondidentifier}.png`,
					import.meta.url
				).href,
				new URL(
					`../assets/blocks/${ore}_block${diamondidentifier}.png`,
					import.meta.url
				).href,
			];
			}
		}, {}),

		screenshots: screenshotMaps.map((map, index) => {
			return {
				id: index,
				map: map,
				imgs: screenshotDayCycles.map((cycle) => {
					return new URL(
						`../assets/${qyoh.activeDiamond}/screenshots/L${
							index + 1
						}-${cycle}.png`,
						import.meta.url
					).href;
				}),
			};
		}, {}),
	};
});
</script>

<template>
	<div class="fixed top-0 right-0 flex gap-2">
		<p>{{ qyoh.activeDiamond }}</p>
		<p>|</p>
		<div class="flex gap-2">
			<button
				v-for="diamond in qyoh.diamonds"
				@click="qyoh.activeDiamond = diamond"
			>
				{{ diamond }}
			</button>
		</div>
	</div>

	<div class="flex gap-2 mb-5">
		<img
			v-for="block in textures.blocks"
			:src="block[0]"
			style="image-rendering: pixelated"
			class="w-[50px]"
		/>
		<img
			v-for="block in textures.blocks"
			:src="block[1]"
			style="image-rendering: pixelated"
			class="w-[50px]"
		/>
	</div>

	<div v-for="tool in textures.tools" class="flex gap-2 mb-5">
		<img
			v-for="material in tool"
			:src="material"
			style="image-rendering: pixelated"
			class="w-[50px]"
		/>
	</div>

	<div class="flex flex-wrap gap-4">
		<img v-for="armor in textures.armor" :src="armor" class="w-[80px]" />
	</div>

	<div>
		<button @click="active > 0 ? active-- : (active = 3)">-</button>
		<p>{{ active }}</p>
		<button @click="active < 3 ? active++ : (active = 0)">+</button>
	</div>

	<div class="flex gap-2 pb-20">
		<img
			v-for="screenshot in textures.screenshots[active].imgs"
			:src="screenshot"
			class="w-[450px]"
		/>
	</div>
</template>
