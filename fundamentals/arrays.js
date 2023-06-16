/*
  Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/
            // problem domain
  /*
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
  uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
  uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
  uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
  */
 
function uniteUnique(arr) {
    let arrayList = [...arguments];
    let newArr = [];
    //console.log(arrayList);
    arrayList.map((ar) => {
      ar.map((x) => {
        if(!newArr.includes(x)){
          newArr.push(x);
        }
      })
    });
    return newArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*

    

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/
    // problemt domain
/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
 pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
*/
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
  
  
  