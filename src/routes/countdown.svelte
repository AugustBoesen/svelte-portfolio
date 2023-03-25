<script>
	import { timer, time, isRunning, isComplete } from './countdown-timer.js';

	$: console.log('>>>', $time);
</script>

<div class="cd" class:complete={$isComplete}>
	<div class="buttons">
		{#if !$isComplete}
			<div class="countdown">{$time}</div>
			{#if $isRunning}
				<button on:click={() => timer.pause()}><h2>Pause</h2></button>
			{:else}
				<button on:click={() => timer.start()}><h2>Start</h2></button>
			{/if}
		{/if}
	</div>
</div>

<style>
	.cd {
		display: flex;
		justify-content: center;
	}
	div {
		margin: 0 0.25rem;
	}
	.buttons {
		margin-top: 2em;
	}
</style>
