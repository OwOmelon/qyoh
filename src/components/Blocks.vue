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
	return ores.reduce((allOres, ore) => {
		const diamondidentifier =
			ore === "diamond" ? `_${qyoh.activeDiamond}` : "";

		return {
			...allOres,
			[ore]: {
				ore: new URL(
					`../assets/blocks/${ore}_ore${diamondidentifier}.png`,
					import.meta.url
				).href,

				block: new URL(
					`../assets/blocks/${ore}_block${diamondidentifier}.png`,
					import.meta.url
				).href,
			},
		};
	}, {});
});
</script>

<template>
	<div class="flex justify-center items-center gap-4 w-full h-full">
		<div
			v-for="block in blocks"
			class="flex flex-col gap-2 justify-center w-full h-full"
		>
			<img v-for="blocktype in block" :src="blocktype" />
		</div>
	</div>
</template>
