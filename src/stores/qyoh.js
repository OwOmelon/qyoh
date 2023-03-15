export const useQyohStore = defineStore("qyoh", () => {
	const diamonds = ["qyoh", "qualm", "exile"];
	const activeDiamond = ref(diamonds[0]);

	const diamondIcons = diamonds.reduce((allDiamonds, diamond) => {
		return {
			...allDiamonds,
			[diamond]: new URL(
				`../assets/blocks/diamond_block_${diamond}.png`,
				import.meta.url
			).href,
		};
	}, {});

	return {
		diamonds,
		activeDiamond,
		diamondIcons,
	};
});
