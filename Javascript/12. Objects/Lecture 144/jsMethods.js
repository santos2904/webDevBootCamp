console.log("Connection established!")

var obj = {
	name: "Santos",
	age: 29,
	isAwakened: false,
	friends: ["Kaja", "Sugi", "Pakki"],
	birthYr: function(y,a){
		return y - a;
	}
}
// obj.birthYr(2018,29)
// 1989

var comments = {};
comments.data = ["Good job!", "lol", "noice", "Lame..."];
function print(array){
	array.forEach(function(element){
		console.log(element);
	});
}
//print(comments.data);


