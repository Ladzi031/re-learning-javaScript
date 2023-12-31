/**
  Array.forEach()
  Array.map()
  Array.filter()
  Array.reduce()
  Array.every()
  Array.some()
  Array.from()
  Array.entries()
 */

const array1 = ['a', 'b', 'c'];
array1.forEach(item => console.log(item)); // takes a callback function as a parameter...
// results: output: "a"
// results: output: "b"
// results: output: "c

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
numbers2.forEach(element => console.log(element)); 
/*
results:

90
8
18
32
50

 */

numbers3 = numbers1.filter(element => element > 18);
numbers3.forEach(el => console.log(el)); // results: "45 \n 25"

//const numbers1 = [45, 4, 9, 16, 25];
let intialValue = 0;
let results = numbers1.reduce((accumulator,currentValue)=> accumulator + currentValue, intialValue);
console.log(results); // results: 99

const lessThanFifty = (value) => value < 50;


// more like a universal quantifier...
let testCondition = numbers1.every(lessThanFifty); // method takes in a callback function
console.log(testCondition); // results: true;

// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(numbers1.some(even)); // results: true


let test  = numbers1.entries(); // converts array to an object
for (const [index, element] of test) { // destructuring the object...
  console.log(index, element);
}
/*
results:

FORMAT:
index element 
0 45
1 4
2 9
3 16
4 25
 */