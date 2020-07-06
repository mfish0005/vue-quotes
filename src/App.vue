<template>
<div id="app">
	<navbar/>
	<transition name="fade" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
		<router-view/>
	</transition>
</div>
</template>
<script>
export default {
	data() {
		return {
			prevHeight: 0,
		};
	},
	methods: {
		beforeLeave(element) {
			this.prevHeight = getComputedStyle(element).height;
		},
		enter(element) {
			const { height } = getComputedStyle(element);

			element.style.height = this.prevHeight;

			setTimeout(() => {
				element.style.height = height;
			});
		},
		afterEnter(element) {
			element.style.height = 'auto';
		},
	},
};
</script>