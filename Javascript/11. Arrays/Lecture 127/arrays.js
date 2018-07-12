//Suppose I wanted to model a group of friends:

var friend1 = "Charlie";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattias";

//This is a lot of code, and it doesn't let us group the friends together

//This is a perfect use case for an ARRAY

var friends = ["Charlie", "Liz", "David", "Mattias"];



//Arrays let us group data together in lists

var friends = ["Charlie", "Liz", "David", "Mattias"];
//				   0		1		2		  3

//Array are indexed starting at 0.  Every slot has a corresponding number



//We can use those indices to retrieve data

var friends = ["Charlie", "Liz", "David", "Mattias"];

console.log(friends[0])   //"Charlie"

friends[1] + " <3 " + friends[2]  //"Liz <3 David"



//We can also update arrays

var friends = ["Charlie", "Liz", "David", "Mattias"];

friends[0] = "Chuck";
friends[1] = "Lizzie";


// We can also add new data

var friends = ["Charlie", "Liz", "David", "Mattias"];
friends[4] = "Amelie";


//Last few things

//We can initialize an empty array two ways:
var friends = []; //no friends :(
var friends = new Array() //uncommon

//Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];

//Arrays have a length property
var nums = [45,37,89,24];
nums.length   //4
