console.log("hello world"); // part of the web-browser...

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
