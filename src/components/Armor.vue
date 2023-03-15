<script setup>
const qyoh = useQyohStore();

const armorMaterials = ["leather", "chain", "iron", "gold", "diamond"];

const armor = computed(() => {
	return armorMaterials.reduce((allArmor, material) => {
		return {
			...allArmor,
			[material]: new URL(
				`../assets/${qyoh.activeDiamond}/armor/${material}_armor.png`,
				import.meta.url
			).href,
		};
	}, {});
});
</script>

<template>
	<div class="flex justify-center items-center gap-4 w-full h-full">
		<img v-for="model in armor" :src="model" class="w-[18%]" />
	</div>
</template>
