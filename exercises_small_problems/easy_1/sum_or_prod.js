/*
UNDERSTANDING:
- input:
    - number, integer greater than 0.
- output:
    - number, sum or product of integers 
    - from 1 to the entered integer, inclusive
- notes/rulse:
    - prompt user for integet greater than 0.
    - prompt user if they want the sum or product
      - sum = [1 + 2 + ...n]
      - product = [1 * 2 ...n]

EXAMPLES/TEST CASES:
>> Please enter an integer greater than 0: 5
>> Enter "s" to compute the sum, or "p" to compute the product. s

====> The sum of the integers between 1 and 5 is 15.

>> Please enter an integer greater than 0: 6
>> Enter "s" to compute the sum, or "p" to compute the product. p

===> The product of the integers between 1 and 6 is 720.

DATA:
Number

ALGO:
    - ask user for number > 0 w/ readline question 
    - ask user if they want to compute the sum or product
    - if user input === 's'
        - sum = [1 + 2 + ...n]
    - if user input === 'p'
      - product = [1 * 2 * ...n]
*/

let readline = require('readline-sync');

let integer = parseInt(
  readline.question('Please enter an integer greater than 0: ')
);

let computation = readline.question(
  'Enter "s" to compute the sum, or "p" to compute the product. '
);

let sum = 0;
for (let i = 1; i <= integer; i += 1) {
  sum += i;
}

let product = 1;
for (let i = 1; i <= integer; i += 1) {
  product *= i;
}

if (computation === 's') {
  console.log(`The sum of the integers begtween 1 and ${integer} is ${sum}`);
}

if (computation === 'p') {
  console.log(
    `The product of the integer between 1 and ${integer} is ${product}`
  );
}
