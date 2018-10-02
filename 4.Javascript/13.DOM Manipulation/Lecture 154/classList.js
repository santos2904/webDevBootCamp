//classList
//A read-only list that contains the classes for a given element.  It is not an array.

/*DEFINE A CLASS IN CSS*/
.another-class {
  color: purple;
  fontSize: 76px;
}

var tag = document.querySelector("h1");

//ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add("another-class");

//REMOVE A CLASS
tag.classList.remove("another-class");

//TOGGLE A CLASS
tag.classList.toggle("another-class");

