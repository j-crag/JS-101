const READLINE = require('readline-sync');
const MESSAGES = require('./loan_calc.json');

function message(message) {
  console.log('##       ' + message);
}

// function used to reformat userinput
function reformatTotalAmount(string) {
  let dollarsOnly = string.split('.')[0];
  let centAmount = string.split('.')[1];

  dollarsOnly = dollarsOnly.split('');

  let digitsOnly = [];
  for (let idx = 0; idx < dollarsOnly.length; idx += 1) {
    if (
      dollarsOnly[idx] === '$' ||
      dollarsOnly[idx] === ',' ||
      dollarsOnly[idx] === ' '
    ) {
      continue;
    } else {
      digitsOnly.push(dollarsOnly[idx]);
    }
  }

  dollarsOnly = digitsOnly.join('');
  let totalAmount = [dollarsOnly, centAmount].join('.');
  return Number(totalAmount).toFixed(2);
}

message('Welome to the loan calculator!');

message('Please enter the total dollar amount of your loan: ');
let userAmountInput = READLINE.prompt();

while (
  reformatTotalAmount(userAmountInput) === 'NaN' ||
  reformatTotalAmount(userAmountInput) === 'undefined'
) {
  message(MESSAGES.invalid);
  userAmountInput = READLINE.prompt();
}

let totalAmount;

if (
  userAmountInput.includes(' ') ||
  userAmountInput.includes('.') ||
  userAmountInput.includes('$') ||
  userAmountInput.includes(',')
) {
  totalAmount = reformatTotalAmount(userAmountInput);
} else {
  totalAmount = Number(userAmountInput).toFixed(2);
}

message(MESSAGES.APR);
let LoanApr = READLINE.prompt();

message('Please enter the loans duration in terms of months: ');
let loanDuration = READLINE.prompt();

let monthlyApr = LoanApr / 12;

let monthlyPayments = Number(
  totalAmount * (monthlyApr / (1 - Math.pow(1 + monthlyApr, -loanDuration)))
).toFixed(2);

message(
  `Your monthly payment on this loan will be\n=====> $${monthlyPayments}.`
);
