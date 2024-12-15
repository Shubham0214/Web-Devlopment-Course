/**
 1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.
 */
let n = 5;
let i = 0;
let sum = 0;
while (i <= n) {
  sum += i;
  i++;
}
console.log(sum);

/**
 2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
 */
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);

/**
 3. Write a 'do while' loop that prompts a user to enter their favourite tea type until they enter 'stop'.
 Store each tea type in an array named 'teaCollection'
 */

// It's not working because it is browser things
// let teaCollection = [];
// let tea;
// do {
//   tea = prompt('Enter Your Favourite Tea (type "stop" to finish)');

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea != "stop");

/*
4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'. 
*/
let sumt = 0;
let k = 1;
do {
  sumt += k;
  k++;
} while (k <= 3);

console.log(sumt);

/*
5. Write a 'for' loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array 
*/

let multipliednumbers = [];
let numbers = [2, 4, 6];

for (let m = 0; m < numbers.length; m++) {
  takeNumber = numbers[m] * 2;
  multipliednumbers.push(takeNumber);
}
console.log(multipliednumbers);

/**
 6. Write a 'for' loop that lists all the cities in the array ["Paris","New York","Tokyo","London"] and stores each city in a new array named 'cityList'
 */

let cities = ["Paris", "New York", "Tokyo", "London"];

let cityList = [];

for (let c = 0; c < cities.length; c++) {
  let myCity = cities[c];
  cityList.push(myCity);
}

console.log(cityList);
