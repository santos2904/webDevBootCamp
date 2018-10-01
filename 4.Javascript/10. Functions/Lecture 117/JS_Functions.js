/*JS Functions
A Fundamental Building Block

Objectives
Understand why we use functions
Define a function without arguments
Define a function with arguments
Return a value from a function

Functions
Functions let us wrap bits of code up into REUSABLE packages.  They are one of the building blocks of JS.

Declare a function first:*/

function doSomething() {
  console.log("HELLO WORLD");
}

/*Then call it:*/

doSomething();
doSomething();
doSomething();
doSomething();

/*Functions
Suppose I want to write code to sing "Twinkle Twinkle Little Star"*/

console.log("Yo boys");
console.log("I am singing song");   
console.log("Soup song");
console.log("Flop song");
console.log("Why dis kolaveri kolaveri kolaveri di");
    
/*To sing it again, I have to rewrite all the code.  This is not DRY!*/

console.log("Yo boys");
console.log("I am singing song");   
console.log("Soup song");
console.log("Flop song");
console.log("Why dis kolaveri kolaveri kolaveri di");
   
/*We can write a function to help us out*/

function singSong() {
    console.log("Yo boys");
    console.log("I am singing song");   
    console.log("Soup song");
    console.log("Flop song");
    console.log("Why dis kolaveri kolaveri kolaveri di");
}

singSong();
singSong();
singSong();
singSong();
singSong();

/*To sing the song, we just need to call singSong();*/

