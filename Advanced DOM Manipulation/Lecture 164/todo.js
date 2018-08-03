var lis = document.querySelectorAll("li");
var red = document.getElementById("red")
var green = document.getElementById("green")
var blue = document.getElementById("blue")

for(var i = 0; i < lis.length; i++) {
lis[i].addEventListener("mouseover", function(){
	this.style.color = "green";
	});
lis[i].addEventListener("mouseout", function(){
	this.style.color = "black";
	});
}

red.addEventListener("mouseover", function(){
	this.style.color = "red";
});
red.addEventListener("click", function(){
	this.style.color = "black";
});
green.addEventListener("mouseover", function(){
	this.style.color = "green";
});
green.addEventListener("click", function(){
	this.style.color = "black";
});
blue.addEventListener("mouseover", function(){
	this.style.color = "blue";
});
blue.addEventListener("click", function(){
	this.style.color = "black";
});