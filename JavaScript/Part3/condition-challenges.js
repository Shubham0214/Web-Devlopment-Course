// Checking if a number is greater
/*
let num1 = 5;
let num2 = 8;

console.log("I am regular upper code");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("Nope, num1 is not greater");
}

console.log("I am regular bottom code");
*/
//Checking if a string is equal to another string:

let username = "Shubh";
let anotherusername = "Shubh";

if (username != anotherusername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// Checking is a variable is a number or not:

let score = 44;

if (typeof score === "number") {
  console.log("This is the number");
} else {
  console.log("This is not a number");
}

// Checking is a booleab value is true or false

let isTeaReady = false;

if (isTeaReady) {
  console.log("this is ready");
} else {
  console.log("tea is not ready");
}

//Checking if an array is empty or not:

let items = ["Shubh", "Shubham", "Indu"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
