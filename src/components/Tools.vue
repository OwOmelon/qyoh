<script setup>
const qyoh = useQyohStore();

const toolNames = ["sword", "pickaxe", "shovel", "axe", "hoe"];
const toolMaterials = ["wood", "stone", "iron", "gold", "diamond"];

const activeTool = ref("pickaxes");

const tools = computed(() => {
	return toolNames.reduce((allTools, tool) => {
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
	}, {});
});

const toolIcons = toolNames.map((tool) => {
	const addS = tool + "s";

	return {
		name: addS,
		img: new URL(`../assets/icons/tools_${tool}.png`, import.meta.url).href,
	};
});
</script>

<template>
	<div class="flex flex-col w-full h-full">
		<Transition name="fade" mode="out-in">
			<div
				:key="activeTool"
				class="flex justify-center items-center gap-4 w-full h-full"
			>
				<img
					v-for="(tool, index) in tools[activeTool]"
					:key="index"
					:src="tool"
					class="w-full"
				/>
			</div>
		</Transition>
		<div class="flex gap-4 justify-center w-full">
			<button
				v-for="(icon, index) in toolIcons"
				:key="index"
				@click="activeTool = icon.name"
				class="w-[8%]"
			>
				<img :src="icon.img" class="w-full" />
			</button>
		</div>
	</div>
</template>
