var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
	if(isPurple){
		document.body.style.background = "purple";
		isPurple = false;
	} else {
		document.body.style.background = "white";
		isPurple = true;
	}	
	//isPurple = !isPurple;
});


//shorter code using css class to toggle the color
/*button.addEventListener("click", function(){
		document.body.classList.toggle("purple");
});*/