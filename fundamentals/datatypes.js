/*
    
JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint  (ES2020)
4. Boolean
5. Undefined
6. Null
7. Symbol
8. object
The Object Datatype

The  OBJECT data type can contain:

1. An object
2. An array
3. A date

 */

// use typeof to verify the datatype of variables

let x = "Volvo" + 16 + 4; // results: Volvo164

let a; // Now x is undefined
a = 5; // Now x is a Number
a = "John"; // Now x is a String

// exponents
let y = 123e5; // 12300000
let z = 123e-5; // 0.00123

// With decimals:
let x1 = 34.0;

// Without decimals:
let x2 = 34;
let x3 = x1 + x2;

// basic boolean concepts
let t = 5;
let r = 5;
let c = 6;
 (t == r)  // Returns true
(t == c) // Returns false
// mostly used for testing conditions

//a javaScript array...
const cars = ["Saab", "Volvo", "BMW"];

//a javascript object...
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
let g = undefined; // this is valid in javascript
