var age = Number(prompt("Enter your age? "));

if (age < 0) {
	console.log("ERROR! You haven't been born yet!");
}

if (age === 21) {
	console.log("HAPPY 21st BIRTHDAY! FREE SHOTS!");
}

if ((age % 2) !== 0) {
	console.log("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Perfect Square");
}