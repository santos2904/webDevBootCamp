var h1 = document.querySelector("h1");

// changes h1 color to red when clicked
h1.addEventListener("click", function(){
	h1.style.color = "red";
	h1.textContent = "H1 WAS CLICKED!"
})

document.querySelector("ul").addEventListener("click", function(){
	console.log("You clicked UL");
})

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	})
}