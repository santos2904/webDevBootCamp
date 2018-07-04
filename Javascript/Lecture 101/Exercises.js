Exercise 1

var x = 10;
var y = "a"

y === "b" || x >= 10 /*false || true*/
true



Exercise 2

var x = 3;
var y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y)/*false && true*/
false



Truthy and Falsy Values

Exercise Try

!"Hello World"
false

!""
true

!null
true

!0
true

!-1
false

!NaN
true

Exercise 3

var str = ""
var msg = "haha!"
var isFunny = "false"

!(( str || msg ) && isFunny) /*!(false||true) && true) = false*/
false