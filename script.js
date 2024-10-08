// /* Function :- Function can be reused to built the code block */

// function logger() {
//   console.log("My name is vamsi");
// }
// logger();
// logger();

// //

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const juice = fruitProcessor(5, 7);
// console.log(juice);

// // function declaration
// function calcAge1(birthYeah) {
//   return 2024 - birthYeah;
// }
// const age1 = calcAge1(1992);

// // function expression
// const calcAge2 = function (birthYeah) {
//   return 2024 - birthYeah;
// };
// const age2 = calcAge2(1992);
// console.log(age1, age2);

// // Arrow Function

// const calcAge3 = (birthYeah) => 2024 - birthYeah;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearUntilRetirement = (birthYeah, firstName) => {
//   const age = 2024 - birthYeah;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearUntilRetirement(1992, "vamsi"));

// function calling other function

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };
// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}pieces of oranges.`;
//   return juice;
// };
// console.log(fruitProcessor(2, 3));

const cutPieces = function (fruit) {
  return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};
console.log(fruitProcessor(8, 9));

// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friend1);
