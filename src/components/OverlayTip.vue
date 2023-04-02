<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
	<div
		class="grid place-items-center w-[70%] mx-auto text-xs md:text-sm text-center"
	>
		when using a filter overlay, make sure to put it above the main texture
		pack

		<Icon icon="tabler:arrow-narrow-down" class="w-10 h-10 my-2" />

		<img
			src="../assets/overlaytip.png"
			class="border-[1px] border-white/25 rounded-lg"
		/>
	</div>
</template>
