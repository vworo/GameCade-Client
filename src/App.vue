<script setup>
	import { RouterView, useRoute } from 'vue-router';
	import { computed } from 'vue';
	import NavBar from './components/NavBar.vue';

	const route = useRoute();
	const isLandingPage = computed(() => route.path === '/')
</script>

<template>
	<div>
		<template v-if="!isLandingPage">
			<NavBar />
		</template>
		
		<RouterView />
	</div>
</template>