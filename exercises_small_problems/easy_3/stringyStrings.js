// explicit rules:
//  - input: Number, positive integer
//  - output: string, alternating "1" and "0" for length that matches integer input
//        - always starts w/ a "1"

// Algorithm
// - set empty string to result
//  - start loop
//      - set loop index to input integer
//      - decrement loop by 1
//      - loop until index < 0
//  - check current index location:
//       if even, add '1'.
//       if odd , add '0'.
//  - return string 'result'

// first version

// function stringy(number) {
//   let result = '';
//   let index = number;
//   while (index > 0) {
//     if (index % 2 !== 0) {
//       result = '1' + result;
//       index -= 1;
//     } else {
//       result = '0' + result;
//       index -= 1;
//     }
//   }
//   return result;
// }

// version after reviewing solution

function stringy(size) {
  let result = '';
  for (let index = 0; index < size; index += 1) {
    let number = index % 2 === 0 ? 1 : 0;
    result += number;
  }
  return result;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
