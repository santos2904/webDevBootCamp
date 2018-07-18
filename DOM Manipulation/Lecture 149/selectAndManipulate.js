//Console
//example 1

var h1 = document.querySelector("h1");

h1.style.color = "pink";

//example 2
var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	} else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 2000);