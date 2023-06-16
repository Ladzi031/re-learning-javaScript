
const idNumbers = 242424242;

let template = `this is a template literal...`;

let details = `my id-number is ${idNumbers}`;

let quotes = `you can next 'single' and "double" quotes inside javaScript-templates"`;


console.log(quotes);
console.log(template);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total) // results: 'Total: 12.50'