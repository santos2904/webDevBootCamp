/*For Loops
Another type of loop!*/
/*
Objectives
Understand the purpose of for loops
Write valid for loops
Compare and contrast while loops and for loops*/

for(init; condition; step) {
  //run some code
}

/*For Loops
Printing numbers from 1-5 with a for loop*/

for(var count = 0; count < 6; count++) {
  console.log(count);
}
var count = 1;


/*Printing numbers from 1-5 with a while loop*/

while(count < 6) {
 console.log("count is: " + count);
 count++;
}


/*Printing each character in a string with a for loop*/

var str = "hello";
var count = 0;   
 
while(count < str.length) {
 console.log(str[count]);
 count++;
}

/*And with a while loop*/

var str = "hello";

for(var i = 0; i < str.length; i++){
  console.log(str[i]);
}
