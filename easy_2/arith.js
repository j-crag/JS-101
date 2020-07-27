const READ = require('readline-sync');

function prompt(message) {
  console.log('==>' + message);
}

function arith(num1, num2) {
  prompt(` ${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
  prompt(` ${num1} - ${num2} = ${num1 - num2}`);
  prompt(` ${num1} * ${num2} = ${num1 * num2}`);
  prompt(` ${num1} / ${num2} = ${num1 / num2}`);
  prompt(` ${num1} % ${num2} = ${num1 % num2}`);
  prompt(` ${num1} ** ${num2} = ${num1 ** num2}`);
}

prompt('Enter the first number: ');
let first = READ.prompt();

prompt('Enter the second number: ');
let second = READ.prompt();

arith(first, second);
