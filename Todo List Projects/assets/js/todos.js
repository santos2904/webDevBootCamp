console.log("connection established")

// check off todos by Clicking
$("li").click(function(){
	$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
});