/*Exercise 1*/

var num = 1;

while (num <= 10) {
	console.log(num);
	num+=2;
}

/*output: 1, 3, 5, 7, 9*/


/*Exercise 2*/

var num = 1

while(num <= 20) {
 if(num % 4 === 0){
   console.log(num);
 }
 num++;
}

/*output: 4, 8, 12, 16, 20*/


/*Exercise 3*/

var num = 100;

while(num < 150) {
  console.log(num + 1); 
  num--;
}

/*output: infinite loop*/
