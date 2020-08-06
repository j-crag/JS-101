const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'spock' && computerChoice === 'scissors')
  );
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt('Computer wins!');
  }
}

function shortKeyChoice(shortKey) {
  switch (shortKey) {
    case 'sp':
      return 'spock';
    case 's':
      return 'scissors';
    case 'r':
      return 'rock';
    case 'l':
      return 'lizard';
    case 'p':
      return 'paper';
    default:
      return shortKey;
  }
}

prompt('Want to play best of 5 to determine who is the GRAND WINNER!? (y/n)');
let challengeAnswer = readline.question().toLowerCase();
while (challengeAnswer[0] !== 'n' && challengeAnswer[0] !== 'y') {
  prompt('Please enter "y" or "n".');
  challengeAnswer = readline.question().toLowerCase();
}

let practiceMode;
let challengeMode;

if (challengeAnswer === 'y') {
  practiceMode = false;
  challengeMode = true;
} else {
  practiceMode = true;
  challengeMode = false;
}

while (practiceMode) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = shortKeyChoice(readline.question());

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = shortKeyChoice(readline.question());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    practiceMode = true;
  } else {
    break;
  }
}

while (challengeMode) {
  prompt('MAY THE BEST PLAYER WIN!!!!!!!!');

  let scoreBoard = [0, 0];

  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = shortKeyChoice(readline.question());

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = shortKeyChoice(readline.question());
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);

    if (playerWins(choice, computerChoice)) {
      scoreBoard[0] += 1;
      prompt(
        `You chose, ${choice}, computer chose ${computerChoice}. The score is \nUser: ${scoreBoard[0]}\nComputer: ${scoreBoard[1]}`
      );
    } else if (choice === computerChoice) {
      scoreBoard[0] += 0;
      scoreBoard[1] += 0;
      prompt(
        `You chose ${choice}, the computer chose ${computerChoice}. The score is \nUser: ${scoreBoard[0]}\nComputer: ${scoreBoard[1]}`
      );
    } else {
      scoreBoard[1] += 1;
      prompt(
        `You chose ${choice}, the computer chose ${computerChoice}. The score is \nUser: ${scoreBoard[0]}\nComputer: ${scoreBoard[1]}`
      );
    }

    if (scoreBoard[0] === 5) {
      prompt(
        `YOU'RE THE GRAND CHAMPION! The score is \nUser: ${scoreBoard[0]}\nComputer: ${scoreBoard[1]}`
      );
      challengeMode = false;
      break;
    } else if (scoreBoard[1] === 5) {
      prompt(
        `...you lost. The score is \nUser: ${scoreBoard[0]}\nComputer: ${scoreBoard[1]}`
      );
      challengeMode = false;
      break;
    }
  }
}
