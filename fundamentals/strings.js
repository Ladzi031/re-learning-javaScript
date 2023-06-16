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
String charCodeAt()
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
/*

*/