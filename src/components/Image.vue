<script setup>
const props = defineProps({
	url: String,
	name: String,
	showImage: Boolean,
});

const showToolTip = ref(false);
</script>

<template>
	<div
		@mouseenter="showToolTip = true"
		@mouseleave="showToolTip = false"
		:class="[
			showImage ? 'bg-white/25' : 'loading',
			'box relative grid place-items-center border-[1px] border-white/25 p-1 rounded-md',
		]"
	>
		<ToolTip :name="name" />

		<Transition name="fade" mode="out-in">
			<img
				:key="url"
				@load="$emit('imageLoad')"
				:src="url"
				:class="[
					showImage ? '' : 'opacity-0',
					'w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.50)] duration-150',
				]"
			/>
		</Transition>
	</div>
</template>
