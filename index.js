// 1. Ways to print in javascript
//  console.log("Hello World");
//  alert("me");
//  document.write("This is document write")

//  // 2. Javasript Console API
//  console.log("Another log")
//  console.warn("This is a warning");
//  console.error("This is error");

//  console.clear()

/*
multi 
line
comment
*/

 // 3. JavaScript Variables
 // What are variables? - Containers to store data values
 var number = 34;
 var number2 = 66;
//  console.log(number+number2);

 // 4. Data types in javascript
// String
 var str1 = "This is a string";
 var str2 = "This is also a string"

// Number
var num1 = 46;
var num2 = 56.67;

// Objects
var marks = {
    Ravi : 56,
    Harry : 45,
    Aditya: 89.88
}
// console.log(marks);

// Booleans
// console.log(true);

var und;
// console.log(und);

var n = null;
// console.log(null);

/*
At a very high level there are two types of data types in javascript
1. Primitive : number, string, undefined, null, boolean, symbol
2. Reference : Array, Objects
*/

// Functions
function print(name) {
    console.log(name);
}
// Conditionals - if, if-else, if-else ladder
// Operators - Arithmatic, logical, comparision, bitwise
// Loops - for, forEach, while, do-while
// Break And Continue - break ,continue

// Arrays
var arr = [10, 20, 30]
// console.log(arr);

// Array Methods :
// 1. length
// 2. push
// 3. pop
// 4. shift - Removes an element from the starting of the Array
// 5. upshift - Adds an element in the starting of the Array
// 6. toString - Converts into a String
// 7. sort - Sorts the array by first converting them into string and then sorts the values alphabatecally

var str = "Aditya Purswani";
// String methods :
// 1. length
// 2. IndexOf
// 3. lastIndexOf
// 4. replace - By default replaces only the first occurance of the string to be placed
// 5. slice

// Dates in javascript
myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours())

// DOM - Document Object Model Manipulation
let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName('container');
// console.log(elemClass)
//elemClass[0].style.background = "yellow";

// Adding subclass to the class element we have selected
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-Success")
// Retrieving the html content
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

// console.log(elem.innerHTML)
// console.log(elem.innerText)

let tn = document.getElementsByTagName("div");
// console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "this is a Child element";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "this is a Child element with bold";
tn[0].replaceChild(createdElement2, createdElement);

//removeChild(element); - removes an element
tn[0].removeChild(createdElement2)

// Selecting Using Query - tags are selected same as we use them in CSS
// let sel = document.querySelector('.container');
// console.log(sel);

// sel2 = document.querySelectorAll('.container');
// console.log(sel2)

function clicked(){
    console.log("The button was clicked");
}

// window.onload = function(){
//     console.log("The document was loaded");
// }

// Events in Javascipt
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>";
//     console.log("click hua");
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener("mouseover", function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We are hovering over the container </b>";
    // console.log("hover over container");
})

firstContainer.addEventListener('mouseout', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    // console.log("mouse out of container");
})

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>";
//     console.log("mouse down when clicked on container");
// })

// setTimeout and setInterval
// Arrow Functions
// function sum(a, b) {
//     return a+b;
// }

// sum2 = (a, b) => {
//     return a+b;
// }

logIn = () =>{
    document.querySelectorAll('.container')[1].innerHTML = '<b> We are logged in</b>';
    console.log("Logged In");
}
// setTimeout(logIn, 3000);
// use clearInterval(clr)/clearTimeout(clr) to cancel the operation of setInterval and setTimeout

// local Storage in JavaScript
// localStorage.setItem("name", "Aditya");
// localStorage.getItem("name");
// localStorage.removeItem("key");
// localStorage.clear()

// JSON Javascript Object Notation -> Used to exchange data
obj = {
    name: "Aditya",
    length: 1,
    a: {
        this:'that'
    }
}
jso = JSON.stringify(obj);
console.log(jso);

parsed = JSON.parse(`{"name":"Aditya","length":1,"a":{"this":"that"}}`)
console.log(parsed)
