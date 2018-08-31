/*Exercise 1*/
var someObject = {};

//which of the following are valid:

someObject._name = "Hedwig";
//valid

someObject.age = 6;
//valid

var prop = "color"
someObject[prop] = "red";
//valid

someObject.123 = true;
//invalid (cannot use . notation for a property starting with a number)


/*Exercise 2*/
var someObject = {
	friends: [
	{name: "Malfoy"},
	{name: "Crabbe"},
	{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: true
};

//write code to retrieve "Malfoy" from someObject
//Go one "layer" at a time!

someObject.friends[0].name
