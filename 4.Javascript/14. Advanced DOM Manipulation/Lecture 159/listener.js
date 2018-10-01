//JAVASCRIPTU

var h1 = document.querySelector("h1");

// changes h1 color to red when clicked
h1.addEventListener("click", function(){
	h1.style.color = "gray";
	h1.style.border = "2px dashed white"
	h1.style.textAlign = "center"
	h1.textContent = "This H1 changed to a gray color with dashed white border, and aligned to the center"
});

document.querySelector("h2").addEventListener("click", function(){
	alert("You clicked h2!");
	this.style.color = "orange";
});

// loops through each Li and console logs message and changes color
var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
		console.log("Li was clicked");
	});
}

// You can also call back a function in event listner
var b = document.querySelector("button");
var p = document.querySelector("#para"); //id

function clicked(){
	p.textContent = "YOU DARE CLICK ME?!";
	p.style.color = "red";
	p.style.fontSize = "200%";
}

b.addEventListener("click", clicked);

//You can select the whole body of the HTML and add events
var body = document.querySelector("body")
var button1 = document.querySelector(".button1")
button1.addEventListener("click", function (){
	body.style.padding = "10%";
	body.style.fontSize = "1500%";
	body.style.background = "red";
	body.textContent = "TERMINATED";
});