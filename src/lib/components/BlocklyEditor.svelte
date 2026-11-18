<script>
	import { toolbox } from '#lib/blocks/toolbox.js';
	import * as Blockly from 'blockly';
	import 'blockly/blocks';
	import * as En from 'blockly/msg/en';
	import { onMount } from 'svelte';

	let { onready } = $props();
	let container;

	onMount(() => {
		Blockly.setLocale(En);
		const workspace = Blockly.inject(container, { toolbox });
		const observer = new ResizeObserver(() => Blockly.svgResize(workspace));
		observer.observe(container);
		onready?.(workspace);

		return () => {
			observer.disconnect();
			workspace.dispose();
		};
	});
</script>

<div bind:this={container} style="width: 100%; height: 100%"></div>
