var todos = [];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
var input = prompt("What would you like to do?");

while (input !== "quit") {
	//handle input
	if(input === "list") {
		console.log(todos);
	} else if(input === "add") {
		//ask for new todo
		var addTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(addTodo);
	} else if(input === "removelast") {
		var removeTodo = todos.pop();
	} else if(input === "removefirst") {
		var removeTodo = todos.shift();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
}, 500);