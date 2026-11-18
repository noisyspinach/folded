<script>
	import { createStage } from '#lib/runtime/stage.js';
	import { onMount } from 'svelte';

	let { onready } = $props();
	let canvas;

	onMount(() => {
		const stage = createStage(canvas);
		stage.draw();
		onready?.(stage);
	});
</script>

<canvas bind:this={canvas} width="640" height="360" style="border: 1px solid #ccc"></canvas>
