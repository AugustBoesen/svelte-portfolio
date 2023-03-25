<script>
	import { timer, time, isRunning, isComplete } from './countdown-timer.js';
	import Countdown from './countdown.svelte';
	import { scale } from 'svelte/transition';
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	let x = getRandomInt(10);
	let y = getRandomInt(10);
	let vastaus = x * y;
	let arvaus = '';
	let ratkaistut = [' | '];

	let pisteet = 0;

	function tarkista() {
		if (arvaus == vastaus) {
			console.log('oikein');
			pisteet++;
			pisteet = pisteet;
			arvaus = '';
			ratkaistut.push(x + '*' + y + '=' + vastaus + ' | ');

			x = getRandomInt(10);
			y = getRandomInt(10);
			x = x;
			y = y;
			vastaus = x * y;
		} else {
		}
	}
</script>

<main>
	{#if $isRunning}
		<h2>
			{x} * {y} =
			<input bind:value={arvaus} type="text" placeholder="vastaus..." on:keydown={tarkista} />
		</h2>
		<button on:click={tarkista}>Check</button>
		<h2>Points: {pisteet}</h2>
	{/if}
	{#if !$isRunning}
		<h1 in:scale>Quick Maths</h1>

		<i in:scale>Solve as many as quickly as you can!</i>
		<br />
	{/if}

	{#if $isComplete}
		<h2>You got {pisteet} right!</h2>
		<i>Press F5 to to try again.</i>
		<br />
		<br />
		<p>You solved:</p>
		{#each ratkaistut as ratkaisu, i}
			<li>{ratkaisu}</li>
		{/each}
	{/if}
	<br />
	<Countdown />
</main>
