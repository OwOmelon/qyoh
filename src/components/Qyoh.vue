<script setup>
import Tools from "./Tools.vue";
import Armor from "./Armor.vue";
import Blocks from "./Blocks.vue";
import Screenshots from "./Screenshots.vue";

const qyoh = useQyohStore();

const textureIconNames = ["tools", "armor", "blocks", "screenshots"];
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
	Screenshots,
};

function setCurrentTexture(texture) {
	currentTexture.value = texture.charAt(0).toUpperCase() + texture.slice(1);
}
</script>

<template>
	<div class="flex w-[1000px] h-[400px] mx-auto rounded-lg overflow-hidden">
		<div class="grid place-items-center bg-[#0C0C12] w-[40%]">
			<div class="w-[70%]">
				<img
					:src="qyoh.diamondIcons[qyoh.activeDiamond]"
					class="w-full rounded"
				/>

				<div class="flex justify-between gap-3 w-full">
					<img
						v-for="(value, key, index) in qyoh.diamondIcons"
						:key="index"
						:src="value"
						@click="qyoh.activeDiamond = key"
						class="w-full mt-[10%] rounded-sm cursor-pointer"
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-10 justify-center bg-[#29293E] w-[10%] p-5">
			<div
				v-for="(icon, index) in textureIcons"
				:key="index"
				class="relative grid place-items-center"
			>
				<button
					@click="
						currentTexture =
							icon.name.charAt(0).toUpperCase() + icon.name.slice(1)
					"
					class="w-full z-10"
				>
					<img :src="icon.img" class="w-full" />
				</button>
				<Transition name="fade">
					<div
						v-show="currentTexture.toLowerCase() === icon.name"
						class="absolute bg-[#464668] w-[130%] h-[130%] rounded-md"
					/>
				</Transition>
			</div>
		</div>

		<div
			class="flex flex-col justify-center items-center bg-[#191925] w-full p-5"
		>
			<Transition name="fade" mode="out-in">
				<component :is="textures[currentTexture]"></component>
			</Transition>
		</div>
	</div>
</template>
