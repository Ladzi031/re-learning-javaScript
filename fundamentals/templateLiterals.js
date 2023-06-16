
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


let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;