READLINE = require('readline-sync');
const MESSAGES = require('./loan_calc.json');

function message(message) {
  console.log('##       ' + message);
}

// function used to reformat userinput
function reformatAmount(string) {
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
  let totalAmount = Number([dollarsOnly, centAmount].join('.'));
  return Number(totalAmount.toFixed(2));
}

function invalidAmount(input) {
  return Number(input) < 0 || Number.isNaN(Number(input));
}

function isInvalidNumber(number) {
  return number.trim() === "" || Number(number) <= 0 || Number.isNaN(Number(number));
}

function retrieveLoanAmount(input) {
  message(MESSAGES["loanAmount"]);
  let loanAmount = reformatAmount(READLINE.prompt());
  while (invalidAmount(loanAmount)) {
    message(MESSAGES["invalidLoanAmount"]);
    loanAmount = reformatAmount(READLINE.prompt());
  }
  return loanAmount;
}

function retrieveApr(input) {
  message(MESSAGES["APR"]);
  let loanApr = READLINE.prompt();
  while (isInvalidNumber(loanApr)) {
    message(MESSAGES["invalidApr"]);
    loanApr = READLINE.prompt();
  }
  return Number(loanApr) / 100;
}

function retrieveDuration(input) {
  message(MESSAGES["loanDuration"]);
  let loanDuration = READLINE.prompt();
  while (isInvalidNumber(loanDuration) || loanDuration.includes('.')) {
    message(MESSAGES["invalidDuration"]);
    loanDuration = READLINE.prompt();
  }
  return Number(loanDuration);
}

function calculateMonthlyPayment() {
  let monthlyApr = loanApr / 12;
  let monthlyPayments = Number(
    totalLoanAmount * (monthlyApr / (1 - Math.pow(1 + monthlyApr, -loanDuration)))
  ).toFixed(2);
  message(
    `Your monthly payment on this loan will be\n=====> $${monthlyPayments}.`
  );
}

message(MESSAGES["welcome"]);

let totalLoanAmount = retrieveLoanAmount();
let loanApr = retrieveApr();
let loanDuration = retrieveDuration();

calculateMonthlyPayment();
