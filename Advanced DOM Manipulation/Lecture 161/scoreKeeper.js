var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#reset");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var numInput = document.querySelector("input");
var winDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1.classList.add("winner");
			gameOver = true;
		}
		p1.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2.classList.add("winner");
			gameOver = true;
		}
		p2.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1.textContent = 0;
	p2.textContent = 0;
	p1.classList.remove("winner");
	p2.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
})