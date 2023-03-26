<script>
	import { onkoKaynnissa, onkoValmis } from './countdown-timer.js';
	import Countdown from './countdown.svelte';
	import { scale } from 'svelte/transition';

	// Numeroiden randomisointifunktio. 0 jätetään pois ja vaikeutta voi muuttaa max-arvolla
	function getRandomInt(max) {
		return Math.floor(Math.random() * max) + 1;
	}

	// Randomisoitavat numeroarvot x ja y
	let x = getRandomInt(10);
	let y = getRandomInt(10);

	// Loput tarvittavista arvoista
	let vastaus = x * y;
	let arvaus = '';
	let ratkaistut = [' | '];
	let pisteet = 0;

	// Vastauksen tarkistusfunktio, joka arpoo samalla uudet x:n ja y:n sekä puskee vastauksia ratkaistut-taulukkoon
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
	<!-- Näkymä pelissä -->
	{#if $onkoKaynnissa}
		<h2>
			{x} * {y} =
			<input bind:value={arvaus} type="number" placeholder="vastaus..." on:keydown={tarkista} />
		</h2>
		<button on:click={tarkista}>Check</button>
		<h2>Points: {pisteet}</h2>
	{/if}

	<!-- Aloitusnäkymä -->
	{#if !$onkoKaynnissa}
		<h1 in:scale>Quick Maths</h1>
		<i in:scale>Solve as many as quickly as you can!</i>
		<br />
	{/if}

	<!-- Loppunäkymä, each-lohkoa käytetty -->
	{#if $onkoValmis}
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
