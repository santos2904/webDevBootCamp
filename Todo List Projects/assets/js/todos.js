console.log("connection established")

//Check off todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done")
});


//Click on X to delete Todo
$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		event.stopPropagation();
	});

//Enter todos in the input and add it to Todo list
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grab new todo text from input
		var todo = $(this).val();
		$(this).val("");
		//create a new li and add it to ul
		$("ul").append("<li><span>X</span> " + todo + "</li>");
	}
});