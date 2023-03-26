<!-- Codesandbox.io:sta löytyvään countdown timer-koodiin perustuva laskuri. Yksinkertaistettu ja
käyttötarkoitukseen mukautettu. -->

<script>
	// Tarvittavat skriptit toteutettu erillisessä js-tiedostossa
	import { laskuri, aika, onkoKaynnissa, onkoValmis } from './countdown-timer.js';
</script>

<!-- Tarkistetaan ensin, onko laskuri käynnissä -->
<div class="cd" class:complete={$onkoValmis}>
	<div class="buttons">
		<!-- Laskurin runtime -->
		{#if !$onkoValmis}
			<div class="countdown">{$aika}</div>

			<!-- Teksti laskurin ollessa käynnissä -->
			{#if $onkoKaynnissa}
				<br />
				<p>Solve the multiplications!</p>

				<!-- Käynnistysnappi -->
			{:else}
				<button on:click={() => laskuri.start()}><h2>Start</h2></button>
			{/if}
		{/if}
	</div>
</div>
