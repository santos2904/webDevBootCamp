var todos = [];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
var input = prompt("What would you like to do?");

while (input !== "quit"){
	//handle input
	if(input === "list"){
		listTodos();
	} else if(input === "add") {
		addTodos();
	} else if(input === "delete"){
		deleteTodos();
	}
/*	} else if(input === "removelast") {
		var removeTodo = todos.pop();
	} else if(input === "removefirst") {
		var removeTodo = todos.shift();*/
	//ask again for new input
	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
}, 500);

function listTodos(){
	console.log("---------------");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("---------------");
}

function addTodos(){
	//ask for new todo
	var addTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(addTodo);
	console.log("Added Todo")	
}

function deleteTodos(){
	var index = prompt("Enter the index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo # " + index);
}