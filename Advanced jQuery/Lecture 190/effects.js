$("button").on("click", function(){
	$("div:first").fadeOut(1500);
});

$("button").on("click", function(){
	$("div:nth(1)").fadeOut(3000);
});

$("button").click(function(){
	$("div:last").fadeOut(6000);
})