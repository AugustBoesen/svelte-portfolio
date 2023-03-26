<script>
	// Vedetään tallennettavaa dataa svelten omasta toiminnallisuudesta sekä store.js:stä
	import { onMount } from 'svelte';
	import { apiData } from './store.js';

	// Parhaat vitsit pitää aina alustaa!
	let joke;

	// onMountilla fetchataan vitsejä sisältävästä apista suodatettu vitsi (pidetään SFW-tyyppisenä)
	onMount(async () => {
		fetch(
			'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
		)
			// Data luettavaksi
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				apiData.set(data);
				// Assignoidaan datasta vedetty vitsidata alustettuun vitsiin
				joke = data.joke;
			})
			// Virheiden varalta
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

<p>A hidden joke for you:</p>
{joke}
