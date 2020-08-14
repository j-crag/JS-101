// explicit rule:
//  - input: number, will always be >= 2
//  - output: number, return index where the first number that has # of digits specified by arg.
//  - first fib # has an index of 1.

// Algorithm
//  - set array to [0,1].
//  - generate fib numbers
// - check if number of digits matches input integer

// Problem: Generate fib number
//  - set first variable to 1
//  - set second variable to 1
//  - declare 3rd variable, but dont initialize
//  - start loop
//      - set 3rd variable to sum of 1st and second
//      - set 1st variable to 2nd
//      - set 2nd variable to 3rd

// Problem: check how many digits
//  - turn number input into string
//  - return length prop. of string.

// frist version

// function digitLength(number) {
//   return String(number).length;
// }

// function findFibonacciIndexByLength(numberOfDigits) {
//   let fibSequence = [0, 1];
//   let firstNum = 0;
//   let secondNum = 1;
//   let fibNumber;
//   do {
//     fibNumber = firstNum + secondNum;
//     fibSequence.push(fibNumber);
//     firstNum = secondNum;
//     secondNum = fibNumber;
//   } while (digitLength(fibNumber) < numberOfDigits);
//   return fibSequence.indexOf(fibNumber);
// }

// after checking solution

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(16));
