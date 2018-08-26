console.log("connection established")

// check off todos by Clicking
$("li").click(function(){
	$(this).toggleClass("done")
});

$("span").click(function(){
		$(this).parent().remove();
	});
