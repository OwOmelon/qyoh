<script setup>
const props = defineProps({
	name: String,
});
</script>

<template>
	<span
		class="text absolute -top-12 bg-white/25 p-2 border-[1px] border-white/25 rounded opacity-0 backdrop-blur-sm text-black whitespace-nowrap z-10 pointer-events-none duration-150"
		>{{ name }}</span
	>
</template>
