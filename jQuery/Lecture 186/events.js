// click()
$("button").click(function(){
	var text = $(this).text();
	console.log("You clicked " + text);
	$(this).css("background", "green");
});

//keypress()
$("input").keypress(function(event){
	if(event.which === 13)
	console.log("You pressed Enter");
});

//on()
$("h1").on("click", function(){
	$(this).css("color", "red")
});

$("input").on("keypress", function(){
	console.log("Keypressed");
});

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});