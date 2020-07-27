// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function finalResult(message, lang = 'en') {
  return MESSAGES[lang][message] + `${output}`;
}

prompt('Would you prefer Englsih or Scottish Gaelic as your language? (en/sg)');
let language = readline.question();

prompt(messages('welcome', language));

while (true) {
  prompt(messages('first', language));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('invalid', language));
    number1 = readline.question();
  }

  prompt(messages('second', language));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('invalid', language));
    number2 = readline.question();
  }

  prompt(messages('operation', language));
  let operation = readline.question();

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalid2', language));
    operation = readline.question();
  }

  switch (language) {
    case 'en':
      prompt(`The result is: ${output}.`);
      break;
    case 'sg':
      prompt(`Is e an toradh: ${output}.`);
  }

  prompt(messages('repeat', language));
  let answer = Number(readline.question());

  if (answer !== 1) break;
}
