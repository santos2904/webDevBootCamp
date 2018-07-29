console.log("CONNECTION ESTABLISHED")

var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function (){
	p1Score++;
	document.querySelector("#p1").textContent = p1Score;
})

p2Button.addEventListener("click", function (){
	p2Score++;
	document.querySelector("#p2").textContent = p2Score;
})