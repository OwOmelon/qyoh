<script setup>
const qyoh = useQyohStore();

const toolNames = ["sword", "pickaxe", "shovel", "axe", "hoe"];
const toolMaterials = ["wood", "stone", "iron", "gold", "diamond"];

const activeTool = ref("swords");

const tools = computed(() => {
	return toolNames.reduce((allTools, tool) => {
		return {
			...allTools,
			[tool + "s"]: toolMaterials.map((material) => {
				return {
					name:
						material === "wood"
							? `${material}en ${tool}`
							: `${material} ${tool}`,
					url: new URL(
						`../assets/${qyoh.activeDiamond}/items/${material}_${tool}.png`,
						import.meta.url
					).href,
				};
			}),
		};
	}, {});
});

const toolIcons = toolNames.map((tool) => {
	return {
		name: tool + "s",
		img: new URL(`../assets/icons/tools_${tool}.png`, import.meta.url).href,
	};
});

const toolDisplay = computed(() => {
	return tools.value[activeTool.value];
});

const array = ref([]);

const showImages = computed(() => {
	return (
		array.value.length === toolDisplay.value.length &&
		array.value.every((img) => img === true)
	);
});

watch(toolDisplay, (x) => {
	array.value = [];
});
</script>

<template>
	<div class="flex flex-col gap-4 md:gap-0 w-full h-full">
		<div class="flex flex-wrap justify-center gap-4 w-full my-auto">
			<Image
				v-for="(tool, index) in toolDisplay"
				:key="index"
				:url="tool.url"
				:name="tool.name"
				:show-image="showImages"
				@image-load="array.push(true)"
				class="w-20 md:w-24 lg:w-28 aspect-square"
			/>
		</div>

		<div class="flex flex-wrap gap-5 justify-center w-full">
			<button
				v-for="(icon, index) in toolIcons"
				:key="index"
				@click="activeTool = icon.name"
				class="w-9 lg:w-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)] hover:scale-110 active:scale-100 duration-150"
			>
				<img :src="icon.img" class="w-full" />
			</button>
		</div>
	</div>
</template>
