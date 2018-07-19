console.log("Connection established...")

//getElementById
var tag = document.getElementById("highlight");


//getElementsByClassName
var tags = document.getElementsByClassName("bolded");


//getElementsByTagName
//var tags = document.getElementsByTagName("h1");
var idTags = document.getElementsByTagName("li");
console.log(idTags[0]);


//querySelector
//select by ID
//Will only return the first match
var highlight = document.querySelector("#highlight");
var bolded = document.querySelector(".bolded"); 
var h1 = document.querySelector("h1"); 


