// isEven()
// Write a function isEven() which takes a single numeric arument and returns true if the number is even, and false otherwise

/*function isEven(num) {
  if (num % 2 === 0) {
    return "true"
  }
  return "false"
}*/

// version 2.0

function isEven(num) {
  return num % 2 === 0;
}


// factorial()
// Write a function factorial() which takes a single numeric arument and returns the factorial of the number
// Example: 4! is 4x3x2x1 = 24

/*function factorial(num) {
  var result = num;
  for(var i = num-1; i >= num; i--) {
    result = result * i;
  }
  return result;
}*/

function factorial(num) {
  var result = 1; // result variable
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// kebabToSnake()
// write a function kebabToSnake() which takes a single kebab-cased string arument and returns the snake_cased version

function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}