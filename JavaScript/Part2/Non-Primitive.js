let username = {
  firstname: "Shubham",
  lastname: "Yadav",
  isLoggedin: true,
};

username.firstname = "Shubh";
username.lastname = "Yadav";
//const - user can not change const value
const myFirstName = "Shubh";

console.log(myFirstName);

// .(dot) - use for any access any inline property
console.log(username.firstname);
console.log(username.lastname);
console.log(username.firstname.lastname);

console.log(typeof username);

let today = new Date();

console.log(today.getDate());
console.log(today.getMinutes());

// Another Data type - Array

let friends = ["Shubh", "Surya", "Motu"];

console.log(friends[1]);

// Implicit type conversion

let isValue = "a";
console.log(1 + "1");
console.log("1" + 1);
console.log(isValue + 1);
