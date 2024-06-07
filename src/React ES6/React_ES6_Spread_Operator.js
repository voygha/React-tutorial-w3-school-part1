/*
Spread Operator
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

Example

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
*/


//The spread operator is often used in combination with destructuring.

//Example
//Assign the first and second items from numbers to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(one,two,"The rest is: ", ...rest);

