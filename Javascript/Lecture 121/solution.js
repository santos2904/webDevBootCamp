// isEven()
// Write a function isEven() which takes a single numeric arument and returns true if the number is even, and false otherwise

function isEven(num) {
  if (num % 2 === 0) {
    return "true"
  }
  return "false"
}


// factorial()
// Write a function factorial() which takes a single numeric arument and returns the factorial of the number
// Example: 4! is 4x3x2x1 = 24

/*function factorial(num) {
  for(var i = 1; i <= num; i++) {
    num = num * i;
  }
  return num;
}*/

function factorial(num) {
  var a = 1;
  for (var i = 2; i <= num; i++) {
    a = a * i;
  }
  return a;
}

// kebabToSnake()
// write a function kebabToSnake() which takes a single kebab-cased string arument and returns the snake_cased version

function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}