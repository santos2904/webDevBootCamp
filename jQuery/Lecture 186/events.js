$("h1").click(function(){
	alert("H1 was clicked");
});

$("button").click(function(){
	var text = $(this).text();
	console.log("You clicked " + text);
	$(this).css("background", "green");
});