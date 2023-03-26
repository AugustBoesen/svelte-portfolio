import { writable } from 'svelte/store';

export const apiData = writable([]);

// Periaatteessa tulevaisuutta ajatellen tämä voisi olla myös samassa kuin countdown-timer.js, mutta
// halusin selkeyden vuoksi pitää APIn ja laskurin erillään tässä nimenomaisessa projektissa.
