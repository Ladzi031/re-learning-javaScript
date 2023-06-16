console.log("hello world"); // part of the web-browser...
console.log('hello world') // no need for semi-colon, and use of single-quotes


/* 
    For character sets javascript uses unicode character sets 
*/

/* 
    initialising variables:
    Using var ... does not have block scope
    
    Using let .... block-scope

    Using const ... block scope, once assigned a value, it cannot be changed!
*/
var a;
let b;

// using the variables:
a = 5;
b = 6;
let z = x + y;
//console.log(z);


// not so clean-code...
function pairElement(str) {
  let arr = str.split("");
  let newArr = arr.map(x => {
    let shortString = x;
    switch(x){
      case "G":
      shortString += "C";
     return shortString.split("");
      break;

      case "C":
      shortString += "G";
      return shortString.split("");
      break;

      case "A":
      shortString += "T";
      return shortString.split("");
      break;

      case "T":
      shortString += "A";
      return shortString.split("");
      break;
    }
  })
  //console.log(newArr); testing here... 
  return newArr;
}
pairElement("CTCTA"); // DNA pairing function, that pairs each DNA nucleotide with its respective nucleotide
