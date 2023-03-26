<script>
	import Greeting from './greeting.svelte'; //Ottaa vuorokaudenajat huomioon
	import Code from './code.svelte'; //Code.svelte sisältää matikkapelin runkoineen
	import Footer from './footer.svelte'; //Täältä tulee footerin yhteystiedot

	let musicurl = 'https://youtu.be/gJbARDlePDU';
	let eventurl = 'https://blush.lifebeyond.fi/';

	let visible = true; //yksinkertainen bool --> pelille if-visibiliteetti

	function toggleCode() {
		visible = !visible;
	}
</script>

<svelte:head>
	<!-- Paras fontti ikinä -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />

	<!-- Ikonit footerin some-linkeille -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	/>

	<!-- Erillinen pää-CSS, koska muuten tämä tiedosto olisi ihan liian pitkä -->
	<link rel="stylesheet" href="./styles.css" />
</svelte:head>

<body>
	<img src="./img/pfp.jpg" alt="pfp" width="120em" />
	<Greeting />

	<!-- SIVUN TEKSTIT -->
	<h2>My name is <b>Severi Boesen</b>.</h2>
	<h2>
		I'm a <b>PRODUCER</b> of
		<a href={musicurl} target="_blank"><b>MUSIC</b></a>,
		<a href={eventurl} target="_blank"><b>EVENTS</b></a>
		&
		<button on:click={toggleCode}>
			<b>CODE</b>
		</button>.
	</h2>

	<!-- Tekstit ovat näkyvissä lähtökohtaisesti ja vaihtavat paikkaa pelin kanssa code-tekstiä klikatessa -->
	{#if visible}
		<p>Click on the <b>keywords</b> above to see or hear for yourself.</p>
		<br />
		<br />
		<p>
			I have a passion for <b>learning</b>, <b>innovation</b>, <b>optimization</b> and, most of all,
			<b>culture</b> in all its forms.
		</p>
		<p>
			I've specialized in <b>virtual instrumentation</b> and <b>sound design</b>; that means
			<i>you dream it, I can produce it.</i>
		</p>
		<p>
			Outside of school & work, I'm an avid tabletop roleplayer, a long-term fencer and
			professional-grade dancer.
		</p>
		<p />
		<p>Interested in details? Contact information can be found at the bottom of this page.</p>
		<br />
		<p>Drop a message & let's get in touch!</p>
	{/if}

	<!-- CODE-"painiketta" klikkaamalla visible-bool vaihtuu -->
	{#if !visible}
		<Code />
	{/if}

	<!-- Footer loppuun -->
	<Footer />
</body>
