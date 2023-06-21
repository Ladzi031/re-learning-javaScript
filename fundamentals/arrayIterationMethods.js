/**
  Array.forEach()
  Array.map()
  Array.filter()
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