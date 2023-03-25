<script>
	const hour = new Date().getHours();
	const greeting = ['Good morning', 'Good afternoon', 'Good evening'];
	let welcomeText = '';
	if (hour < 12) welcomeText = greeting[0];
	else if (hour < 18) welcomeText = greeting[1];
	else welcomeText = greeting[2];
</script>

<h1>{welcomeText}, friend!</h1>
