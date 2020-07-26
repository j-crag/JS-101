PROCESS

- input: A single integer, may be positve, negative, or 0.
- output: boolean value
- rules:
  - if a single integer's absolute value is odd, return true.
  - if the absolute value is even, return false.
  - argument can only be positive integer, negative integer, or 0. (don't need to worry about NaN)

EXAMPLES
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
console.log(isOdd(-10000)) // => false
console.log(isOdd(100001)) // => true

DATA
input - number

ALGO

- implement control flow with if statement that checks if the absolute value of the integer input is odd.
  - use Math.abs(integer), divide by 2 using modulus operator to return remainder.
  - if remainder doesn't == 0, then return true
  - if remainder is anything other than 0, return false.
