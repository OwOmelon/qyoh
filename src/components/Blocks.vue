<script setup>
const qyoh = useQyohStore();

const ores = [
	"coal",
	"redstone",
	"lapis",
	"emerald",
	"iron",
	"gold",
	"diamond",
];

const blocks = computed(() => {
	return ores.map((type) => {
		const diamondType = type === "diamond" ? `_${qyoh.activeDiamond}` : "";

		return {
			ore: {
				name: type === "lapis" ? `${type} lazuli ore` : `${type} ore`,
				url: new URL(
					`../assets/blocks/${type}_ore${diamondType}.png`,
					import.meta.url
				).href,
			},

			block: {
				name: `${type} block`,
				url: new URL(
					`../assets/blocks/${type}_block${diamondType}.png`,
					import.meta.url
				).href,
			},
		};
	});
});

const array1 = ref([]);
const array2 = ref([]);

const showNonDiamondBlocks = computed(() => {
	return (
		array1.value.length === (blocks.value.length - 1) * 2 &&
		array1.value.every((img) => img === true)
	);
});

const showDiamondBlocks = computed(() => {
	return array2.value.every((img) => img === true);
});

watch(blocks, (x) => {
	array2.value = [];
});
</script>

<template>
	<div class="flex flex-wrap justify-center items-center gap-4 w-full">
		<div
			v-for="n in 6"
			class="flex flex-col gap-4 justify-center w-16 lg:w-20"
		>
			<Image
				v-for="(blocktype, index) in blocks[n - 1]"
				:key="index"
				:url="blocktype.url"
				:name="blocktype.name"
				:show-image="showNonDiamondBlocks"
				@image-load="array1.push(true)"
				class="aspect-square"
			/>
		</div>

		<div class="flex flex-col gap-4 justify-center w-16 lg:w-20">
			<Image
				v-for="(blocktype, index) in blocks[6]"
				:key="index"
				:url="blocktype.url"
				:name="blocktype.name"
				:show-image="showDiamondBlocks"
				@image-load="array2.push(true)"
				class="aspect-square"
			/>
		</div>
	</div>
</template>
