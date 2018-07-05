// create secretNumber
var secretNumber = 4;

//ask user for guess 
var guess = Number(prompt("Guess a number"));

//check if guess is right
if (guess === secretNumber) {
	alert ("YOU GUESSED IT RIGHT!");
}
/*else if (guess !== secretNumber) {
	alert("WRONGGGG!");
}*/

// check if guess is higher 
else if (guess > secretNumber) {
	alert("Too high. Guess again");
}

// check if guess is lower
else {
	alert("Too Low. Guess again");
}