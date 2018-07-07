/*Arguments
Often we want to write functions that take inputs.*/

function square(num) {
  console.log(num * num);
}

/*Now when we call square we need to pass in a value*/

square(10);  //prints 100
square(3);   //prints 9
square(4);   //prints 16

/*Arguments
Functions can have as many arguments as needed*/

function area(length, width) {
  console.log(length * width);
}
area(9,2); //18


function greet(person1, person2, person3){
  console.log("hi " + person1);
  console.log("hi " + person2);
  console.log("hi " + person3);
}
greet("Harry", "Ron", "Hermione");

// hi Harry
// hi Ron
// hi Hermione