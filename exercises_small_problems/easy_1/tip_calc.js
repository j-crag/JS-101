/*
UNDERSTANDING:
 - input: 
    - number, represents total bill amount.
    - number, represents tip percentage. 
 - output: 
    - number, represents the tip amount.
    - number, represents the total amount. 
- rules:
    - promt user for 1) total bill amount and 2) tip percentage as a number 
    - assume the user will only enter numbers.
    - limit to 2 decimal places

EXAMPLES/TEST CASES:
    (200, 15) ===> 30.00, 230.00
    (250.55, 20) ===> 50.11, 300.22

ALGO:
    - prompt user for bill amount and tip amount w/ readline
    - use Number() to convert to numbers
    - compute bill tip and bill total
      tip = bill  * (percentage / 100)
      total = bill + tip
    - log tip and total to console
      - fix decimals to 2.
*/

let readline = require('readline-sync');

let bill = parseFloat(readline.question('what is the bill?\n'));

let tipPercent = parseFloat(readline.question('What is the tip percentage?\n'));

let tip = bill * (tipPercent / 100);

let total = bill + tip;

console.log(
  `The tip is \$${tip.toFixed(2)}\nThe Total is \$${total.toFixed(2)}`
);
