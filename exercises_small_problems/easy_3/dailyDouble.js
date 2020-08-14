// explicit rules:
//  - input: string
//  - output: string
//      - contains value of original w/ all consecutive duplicated chars collapsed into single char

// implicit rules:
//  - if input is empty string, return empty sting
//  - if no duplicate consequtives, return original string

// Algorithm
//  - create an empty array to contain the final results array
//  - create an array containing each individual character
//  - start iteration at first index of string, continue for length of charArray
//      - if next index has same letter remove letter from index
//      - if next index is different, set this index as starting index
//  - join final result array by adjoining spaces
//  - return result

// first version

// function crunch(string) {
//   let result = [];
//   let charArray = string.split('');
//   for (let index = 0; index < charArray.length; index += 1) {
//     if (charArray[index] !== charArray[index + 1]) {
//       result.push(charArray[index]);
//     } else {
//       continue;
//     }
//   }
//   return result.join('');
// }

// examples

// console.log(crunch('ddaaiillyy ddoouubbllee'));
// console.log(crunch(''));

// after reviewing solution

function crunch(text) {
  let crunchText = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }
  }
  return crunchText;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch(''));
