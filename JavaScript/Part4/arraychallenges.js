/*
1. Declare an array named 'teaFlavour' that contains the strings 'green tea','black tea', and 'oolong tea'.

Access the first element of the array and store it in a variable named 'firstTea'
*/

let teaFlavour = ["Green tea", "Black tea", "OOlong tea"];

console.log(teaFlavour[0]);

const firstTea = teaFlavour[0];

/*

2. Declare an array named 'cities' containig 'London' , 'Tokyo' , 'Paris' , 'New york'

Access the third element in the array and store it in a variable named 'favourite city'.
 */

let cities = ["London", "Paris", "Tokyo", "New York"];

const favouritecity = cities[2];
console.log(favouritecity);

/*
3. You have an array named 'teaTypes' containing 'herbal tea' , 'white tea' , 'masala chai'

Change the second element of the array to "Jasmine tea".
*/

let teaTypes = ["Herbal tea", "white tea", "jasmine tea"];

teaTypes[1] = "jasmine tea";

console.log(teaTypes);

/*
4. Declare an array named 'citiesVisited' containing 'Mumbai' and 'Sydney'

Add 'Berlin' to the array using the 'push' method
*/

let citiesVisited = ["Mumbai", "Sydney"];

console.log(citiesVisited);

citiesVisited.push("Berlin");

console.log(citiesVisited);

/*
5. You have an array named 'teaOrders' with 'chai' , 'iced tea' , 'matcha' , 'earl grey'

Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'
 */

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

console.log(teaOrders);

const lastOrder = teaOrders.pop();

console.log(lastOrder);

console.log(teaOrders);

/*
6. You have an array named 'popularTea' containing 'green tea' , 'oolang tea' , and 'chai'

Create a soft copy of this array named 'softCopyTeas'
*/

let popularTeas = ["green tea", "oolang tea", "chai"];

let softCopyTeas = popularTeas;
console.log(softCopyTeas);
console.log(popularTeas);

/*
7. You have an array named 'topCities' containing 'Berlin','Singapur' , and 'New York'

Create a hard copy this array named 'hardCopyCities'
*/
//In hardcopy there is no changes in declare array
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];

topCities.pop();
console.log([...hardCopyCities]);

/*
8. You have two arrays: 'europeanCities' containing 'Paris' and 'Rome' , and 'asianCities' containing 'Tokyo' and 'Bangkok'.

Merge these two arrays into a new array named worldCities.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities = [europeanCities.concat(asianCities)];

console.log(worldCities);
console.log(typeof worldCities);

/*
9. You have an array named 'teaMenu' containing 'masala chai' , 'oolang tea' , 'green tea' and 'earl grey'

Find the length of the array and store it in a variable named 'menuLength'
*/

let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];

const menuLength = teaMenu.length;

console.log(menuLength);

/*
10. You have an array named 'cityBucketList' containing 'Kyoto' , 'London' ,'Cape town' , 'Vancouver' 

Check if "London" is in the array and store the result in a variable named 'isLondonInList'
*/
let cityBucketList = ["Kyoto", "London", "CapeTown", "Vancouver"];

let isLondonInList = cityBucketList.includes("London");

console.log(isLondonInList);
