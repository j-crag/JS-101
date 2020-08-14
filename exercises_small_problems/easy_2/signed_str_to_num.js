// explicit rules:
//  - convert non negative integer to string representation of integer.
//  - no conversion methods

// Algorithm:
//  - create object charNums with number to string pairings from 0 to 9.
//  - create empty string to contain string representations of numbers.
//  - take the last digit of the current number and set it to variable "lastDigit"
//    - do this by taking the remainder of the number (number % 10 = lastDigit)
//  - remove last digit by dividing number by 10 and reassigning to number variable
//  - use last digit to look up string representation in object charNums
//  - add this character to the results string
//  - repeat while the number is > 0

function integerToString(number) {
  const CHAR_NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let lastDigit = number % 10;
    number = (number - lastDigit) / 10;
    result = CHAR_NUMS[lastDigit] + result;
  } while (number > 0);

  return result;
}

//examples

console.log(integerToString(123)); // => '123'
console.log(integerToString(1)); // => '1'

function signedIntegerToString(number) {
  let negativeResult = '-';
  let positiveResult = '+';
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(-100)); // => '-100'
console.log(signedIntegerToString(+100)); // => '100'
console.log(signedIntegerToString(100)); // => '100'
