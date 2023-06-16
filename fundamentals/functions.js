/*    

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

*/

function myFunction(x, y) {
    return x * y; // compute the product of x and y
} 
  let results = myFunction(4,6);
  // console.log(results);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
  
  let value = toCelsius(77); // convert Convert Fahrenheit to Celsius:
  console.log(value);
  
  let value2 = toCelsius(34);
  console.log(value2);



let functionObject = toCelsius; // this refers to the functioin object and not the function RESULTS...
//console.log(functionObject);

functionObject(4,5); // this is valid