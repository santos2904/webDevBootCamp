console.log("CONNECTION ESTABLISHED")

var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
		}
		document.querySelector("#p1").textContent = p1Score;
	}
})

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
		}
		document.querySelector("#p2").textContent = p2Score;
	}
})