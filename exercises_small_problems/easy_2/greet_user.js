const READ = require('readline-sync');

function prompt(message) {
  console.log('===>' + message);
}

function yelling(userNameString) {
  if (userNameString.endsWith('!')) {
    userName = userName.slice(0, -1);
    prompt(`HEY, ${userName.toLocaleUpperCase()}. WHY ARE WE YELLING!?`);
  } else {
    prompt(`Hey, ${userName}`);
  }
}

prompt("What's your name?");
let userName = READ.prompt();

yelling(userName);
