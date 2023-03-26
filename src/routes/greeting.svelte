<script>
	// Daily-Dev-Tips:n greeter-skriptiin perustuva, mutta laajennettu greeter-skripti.
	const hour = new Date().getHours();

	// Nämä ovat erillisiä kustomoitavuuden vuoksi, halutessa näitä voi myös laajentaa ja tarkentaa tai jopa randomisoida
	const greeting = ['Good morning', 'Good afternoon', 'Good evening'];
	const guest = ['early bird', 'friend', 'night owl'];
	let welcomeText = '';
	let guestText = '';

	// Iffit tarkistaa laitteen tunneista, miten tervehtiä
	if (hour < 12) (welcomeText = greeting[0]), (guestText = guest[0]);
	else if (hour < 18) (welcomeText = greeting[1]), (guestText = guest[1]);
	else (welcomeText = greeting[2]), (guestText = guest[2]);
</script>

<h1>{welcomeText}, {guestText}!</h1>
