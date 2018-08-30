$("#button1").on("click", function(){
	$("div").css("background", "red");
	$("div:first").fadeOut(1500).text("Please don't fade me!");
	$("div:nth(1)").fadeOut(3000).text("I'm begging you, please");;
	$("div:last").fadeOut(5000, function(){
		alert("Fadeout completed!");
		$("#button2").css("display", "block");
	}).text("Help help help!!");
	$(this).css("display", "none");
});

$("#button2").click(function(){
	$("div").css("background", "green");
	$("div").slideDown(3000, function(){
		console.log("Revived!");
		$("#button1").css("display", "block");
	});
	$(this).css("display", "none");
	$("div:first").text("Yay, we've been revived");
	$("div:nth(1)").text("Reborn!");
	$("div:last").text("Thank you so much!");
});

//fadeToggle() can be used to fadeIn or fadeOut an element
//slideToggle() can be used to slideUp and slideDown