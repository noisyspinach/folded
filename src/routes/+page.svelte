<script>
	import BlocklyEditor from '#lib/components/BlocklyEditor.svelte';
	import StageCanvas from '#lib/components/StageCanvas.svelte';
	import { onMount } from 'svelte';

	const folded = {};
	onMount(() => {
		window.folded = folded;
	});
</script>

<div class="layout">
	<div class="editor"><BlocklyEditor onready={(w) => (folded.workspace = w)} /></div>
	<div class="stage"><StageCanvas onready={(s) => (folded.stage = s)} /></div>
</div>

<style>
	:global(html, body) {
		margin: 0;
		height: 100%;
	}
	.layout {
		display: flex;
		height: 100vh;
	}
	.editor {
		flex: 1;
		min-width: 0;
	}
	.stage {
		padding: 12px;
	}
</style>
