let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}

function printBands(top5Bands){
	console.log(`Top 5 Bands: ${top5Bands}`);
}
printBands("The Score, KDA, Marshmello, Bruno Mars, Alan Walker");

function printMovies(top5Movies){
	console.log(`Top 5 Movies: ${top5Movies}`);
}
printMovies("Avenger's Infinity War: 85%, Transformers: 58%, Pirates of the Caribbean: The Curse of the Black Pearl: 80%, Spider-man: No Way Home: 93%, Rise of the Guardians:74%");