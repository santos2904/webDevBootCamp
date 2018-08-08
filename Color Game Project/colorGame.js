var colors = [
	"rgb(255, 0, 0)", //red
	"rgb(255, 255, 0)", //yellow
	"rgb(0, 255, 0)", //green
	"rgb(0, 255, 255)", //cyan
	"rgb(0, 0, 255)", //blue
	"rgb(255, 0, 255)" //magenta
]

var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}
