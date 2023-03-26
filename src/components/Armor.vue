<script setup>
const qyoh = useQyohStore();

const armorMaterials = ["leather", "chain", "iron", "gold", "diamond"];

const armor = computed(() => {
	return armorMaterials.reduce((allArmor, material) => {
		return {
			...allArmor,
			[material]: {
				name: `${material} armor`,
				url: new URL(
					`../assets/${qyoh.activeDiamond}/armor/${material}_armor.png`,
					import.meta.url
				).href,
			},
		};
	}, {});
});

const array = ref([]);

const showImages = computed(() => {
	return array.value.length === 5 && array.value.every((img) => img === true);
});

watch(armor, (x) => {
	array.value = [];
});
</script>

<template>
	<div class="flex flex-wrap justify-center gap-4 w-full">
		<Image
			v-for="(model, index) in armor"
			:key="index"
			:url="model.url"
			:name="model.name"
			:show-image="showImages"
			@image-load="array.push(true)"
			class="w-20 md:w-24 lg:w-28 aspect-[2/4]"
		/>
	</div>
</template>
