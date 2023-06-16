/*
JAVASCRIPT STRING METHODS

String length
String slice()
String substring()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String split()
String indexOf()
String lastIndexOf()
String startsWith()
Strign endsWith()
 */

let firstName = "Ladzani";
console.log(firstName.length); //results : 7

console.log(firstName.slice(0,4).concat("i").toUpperCase()); //results: "Ladzi"

results = firstName.substring(0, 5);// similar to slice, second parameter indicates the length of the string (exclusive!!);
console.log(results); // results: 'Ladz';


const regex = /a/;
const regex2 = /a/g;
firstName.replace(regex, "b"); //results: Lbdzani
firstName.replace(regex2, "b"); // results: Lbdzbni, works the same as replaceAll() method... which replaces all instances of the pattern!
/*
returns a new String with some or all the matches of a patttern(REGEX or STRING)
 */

firstName.replaceAll(regex, "a"); // results: Lbdzbni... replaces all instances of the pattern, but with REGEX, IT must have a global-FLAG SPECIFIED! TO WORK


console.log(firstName.toUpperCase() +" "+ firstName.toLowerCase()) //results: "LADZANI ladzani";
let lastName = " Farooq";
firstName.concat(lastName); // results: "Ladzani farooq", simply joins two string together

let test = " example ";
console.log(test.trim()); // results: "example" removes empty spaces at the start of string and at the end;

console.log(test.trimStart()); //results: "example "; removes empty spaces at the start of the string;
console.log(test.trimEnd()); // results: " example"; removes empry spaces at the end of the string;


let idNumber = "4242974027834072834";
let shortId = idNumber.slice(0, 4);
const maskedIdNumber = shortId.padEnd(idNumber.length, "*"); // parameter:1-> the length of the string, 2-> the filling-String
console.log(maskedIdNumber); // results: "4242***************" first 4 digits 

firstName.charAt(5); // returns the string at the index specified in the parameter

let arr = firstName.split(""); // returns an String Array
console.lot(arr.map((obj )=> {
    console.log(obj);
} )); 
/* results: 
'L'
'a'
'd'
'z'
'a'
'n'
'i' 
*/

console.log(firstName.indexOf("a")); // returns the index-value of the FIRST occurance of the letter "a"... (from LEFT to RIGHT)
console.log(firstName.indexOf("a", 2)); // returns the index-values of the SECOND ocurance of the letter "a"...  (from LEFT to RIGHT)

firstName.lastIndexOf("a");// returns the index-value of the FIRST occurance of the letter "a" from RIGHT to LEFT
// firstName.lastIndexOf("a", 3); 

firstName.startsWith("L"); //The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// results: true

firstName.endsWith("i"); //The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
// results: true
