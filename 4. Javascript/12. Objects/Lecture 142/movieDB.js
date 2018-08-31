/*MovieDB*/
//Create an array of movie objects.
//Each movie should have a title, rating and hasWatched properties.
// Iterate through the array and print out something that looks like:

var movieDB = [
	{
		title: "In Burges", 
		hasWatched: false, 
		rating: 5
	},
	{
		title: "Frozen", 
		hasWatched: true, 
		rating: 4.5
	},
	{
		title: "Mad Max Fury Road", 
		hasWatched: true, 
		rating: 5
	},
	{
		title: "Les Miserables", 
		hasWatched: false, 
		rating: 3.5
	},
]

movieDB.forEach(function(movie){
	var result = "You have ";
	if (movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " starts"
	console.log(result)
});

function buildString(movie){
		var result = "You have ";
	if (movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " starts"
	return result;
}

movieDB.forEach(function(movie){
	console.log(buildString(movie));
});