Loops
Repeating Things

While Loops
Printing numbers from 1-5

var count = 1;

while(count < 6) {
 console.log("count is: " + count);
 count++;
}

//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5

While Loops
Printing each character in a string

//string we're looping over:
var str = "hello";
//first character is at index 0
var count = 0;    

while(count < str.length) {
 console.log(str[count]);
 count++;
}

//"h"
//"e"
//"l"
//"l"
//"o"

While Loops
Infinite loops occur when the terminating condition in a loop is never true

var count = 0;

while(count < 10) {
 console.log(count);
}
The above example prints "0" over and over because count is never incremented
