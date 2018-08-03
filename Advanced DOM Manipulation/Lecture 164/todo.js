var lis = document.querySelectorAll("li");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

for(var i = 0; i < lis.length; i++) {
lis[i].addEventListener("mouseover", function(){
	this.style.color = "green";
	});
lis[i].addEventListener("mouseout", function(){
	this.style.color = "black";
	});
}


//rgb
red.addEventListener("mouseover", function(){
	this.style.color = "red";
	this.style.fontSize = "300%";
});
green.addEventListener("mouseover", function(){
	this.style.color = "green";
	this.style.fontSize = "300%";
});
blue.addEventListener("mouseover", function(){
	this.style.color = "blue";
	this.style.fontSize = "300%";
});




