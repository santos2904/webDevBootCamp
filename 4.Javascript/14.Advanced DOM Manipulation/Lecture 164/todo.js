var lis = document.querySelectorAll("li");
var sred = document.getElementById("red");
var sgreen = document.getElementById("green");
var sblue = document.getElementById("blue");

for(var i = 0; i < lis.length; i++) {
lis[i].addEventListener("mouseover", function(){
	this.classList.add("selected");
	});
lis[i].addEventListener("mouseout", function(){
	this.classList.remove("selected");
	});
lis[i].addEventListener("click", function(){
	this.classList.toggle("done");
});
}


//rgb
sred.addEventListener("mouseover", function(){
	this.classList.toggle("redcl");
});
sgreen.addEventListener("mouseover", function(){
	this.classList.toggle("greencl");
});
sblue.addEventListener("mouseover", function(){
	this.classList.toggle("bluecl");
});




