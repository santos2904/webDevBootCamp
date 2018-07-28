var h1 = document.querySelector("h1");

// changes h1 color to red when clicked
h1.addEventListener("click", function(){
	h1.style.color = "red";
	h1.textContent = "H1 WAS CLICKED!"
})