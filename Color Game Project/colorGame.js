var colors = [
	"rgb(255, 0, 0)", //red
	"rgb(255, 255, 0)", //yellow
	"rgb(0, 255, 0)", //green
	"rgb(0, 255, 255)", //cyan
	"rgb(0, 0, 255)", //blue
	"rgb(255, 0, 255)" //magenta
]

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var pickedColor = colors[3];

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){ //add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
	//get the color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare color to pickedColor
	if (clickedColor === pickedColor){
		alert("correct")
	} else {
		alert("wrong!")
	}
	});
}