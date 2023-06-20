/*
Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array concat()
Array flat()
Array splice()
Array slice()

brushing over some of array-methods
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i =0; i < arr.length; i++){
    console.log(arr[i]);
} 
arr.toString(); // convert to string()... results: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10';

arr.pop(); // removes the last element in the array... this method also returns the actual element being removed

arr.push(11); // adds the element in the parameter at the end of the array

arr.shift(); // removes the first element in the array and returns it... results: 1

arr.unshift(1); // inserts the new element in the array and it returns the length of the array

arr.join(' ') //Adds all the elements of an array into a string, separated by the specified separator string.

arr.concat([100, 200, 300]); // Combines two or more arrays. This method returns a new array without modifying any existing array

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()); // results:  output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2)); // results: output: Array [0, 1, 2, Array [3, 4]]


const animals = ['rat', 'bison', 'cow', 'duck', 'dog'];

console.log(animals.slice(2)); // results:  output: Array ["cow", "duck", "dog"]

console.log(animals.slice(2, 4)); // results: output: Array ["cow", "duck"]

console.log(animals.slice(1, 5)); // results: output: Array ["bison", "cow", "duck", "dog"]

console.log(animals.slice(-2)); // results: output: Array ["duck", "dog"]

console.log(animals.slice(2, -1));// results: output: Array ["cow", "duck"]

console.log(animals.slice()); // results: output: Array ["rat", "bison", "cow", "duck", "dog"]



const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// results:  output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// results: output: Array ["Jan", "Feb", "March", "April", "May"]
