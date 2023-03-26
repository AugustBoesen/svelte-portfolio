// Codesandbox.io:sta löytyvään countdown timer-koodiin perustuva laskuri. Yksinkertaistettu ja käyttötarkoitukseen mukautettu.
// Englannista poikkean koodin arvoissa siksi, että tätä oli aluksi hyvin hankala ymmärtää :D

import { writable } from 'svelte/store';

//Tämän muuttaminen riittää, jos haluaa enemmän tai vähemmän sekunteja peliin
let sekunteja = 20;

const laskettuAika = sekunteja * 1000;

//Formatointi
const formatter = new Intl.DateTimeFormat('en', {
	hour12: false,
	minute: '2-digit',
	second: '2-digit'
});

// kirjoitettavat arvot, joiden avulla katsotaan aikaa, onko peli käynnissä sekä onko peli ohi
export const aika = writable(formatter.format(laskettuAika));
export const onkoKaynnissa = writable(false);
export const onkoValmis = writable(false);

// Luodaan laskuri
const createTimer = () => {
	let animRef;
	let uusinKayntiAika;
	let aikaaJaljella = laskettuAika;

	const animate = (aikaleima) => {
		// Onko ensimmäinen stamppi?
		if (uusinKayntiAika === undefined) {
			// Ottaa aloitusajan ylös
			uusinKayntiAika = aikaleima + aikaaJaljella;
		}
		console.log(aikaleima, uusinKayntiAika);

		// Ajannäyttö
		const nykyinenAika = uusinKayntiAika - aikaleima;
		if (nykyinenAika <= 0) {
			cancelAnimationFrame(animRef);
			aika.set(formatter.format(0));
			onkoKaynnissa.set(false);
			onkoValmis.set(true);
			return;
		}
		aika.set(formatter.format(nykyinenAika));

		// Rekursiivinen animointi, liikutaan kunnes ei tarvitse
		animRef = requestAnimationFrame(animate);
	};

	// Käynnistysnappula
	const api = {
		start: () => {
			onkoKaynnissa.set(true);
			animRef = requestAnimationFrame(animate);
		}
	};

	return api;
};

export const laskuri = createTimer();
