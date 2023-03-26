<script setup>
import Tools from "./Tools.vue";
import Armor from "./Armor.vue";
import Blocks from "./Blocks.vue";
import Filters from "./Filters.vue";

const textureIconNames = ["tools", "armor", "blocks", "filters"];
const textureIcons = textureIconNames.map((icon) => {
	return {
		name: icon,
		img: new URL(`../assets/icons/${icon}.png`, import.meta.url).href,
	};
});

const currentTexture = ref("Tools");
const textures = {
	Tools,
	Armor,
	Blocks,
	Filters,
};

const capitalizeFirstLetter = (word) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};
</script>

<template>
	<div
		class="flex flex-col md:flex-row md:flex-row w-[90%] max-w-[800px] mx-auto border-[1px] border-white/50 rounded-lg backdrop-blur-sm overflow-hidden"
	>
		<div
			class="flex md:flex-col gap-10/ gap-5 justify-center bg-white/50 p-5"
		>
			<div
				v-for="(icon, index) in textureIcons"
				:key="index"
				class="box relative grid place-items-center w-10"
			>
				<button
					@click="currentTexture = capitalizeFirstLetter(icon.name)"
					class="w-full z-10"
				>
					<img
						:src="icon.img"
						class="w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)]"
					/>
				</button>

				<ToolTip :name="icon.name" class="hidden lg:block !text-black" />

				<Transition name="fade">
					<div
						v-show="currentTexture.toLowerCase() === icon.name"
						class="absolute bg-white/50 w-[130%] h-[130%] border-[1px] border-white/50 rounded-md"
					/>
				</Transition>
			</div>
		</div>

		<div
			class="flex flex-col justify-center items-center bg-white/25 w-full lg:aspect-video p-3"
		>
			<Transition name="fade" mode="out-in">
				<component :is="textures[currentTexture]"></component>
			</Transition>
		</div>
	</div>
</template>
