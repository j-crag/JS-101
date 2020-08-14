// explicit rules:
//   - input: string
//   - output: string
//      - will always fit in browser windonw
//      - prints input text inside box

// implicit rules:
// - default box:
//      - width = 5 lines
//      - text is centered in box
//      - 1-2 spaces between box and start/end of text

// Algorithm
//  - set a variable to the length of the text input
//  - on 1st line, start the line with a "+", print dashes for length of text + 2,
//   end line w/ "+".
//  - on lines 2 through lastline - 1, stat line w/ "|", print spaces for length of text
//   +2, end line w/ "|",
//      - if the 'body' lines need to expand, repeat this pattern until theres one
//        new blank line following the last line.
//  - on last line, repeat pattern for first line.

// Problem: create first/last line template
//  - set topBottomTemplate variable to length of input + 2
//  - print the top line
//  - print body
//  - print topBottomTemplate again
//      - when there's not any more text to print

// first version

// function topAndBottomTemplate(length) {
//   let topAndBottomLines = '+' + '-'.repeat(length) + '+';
//   return topAndBottomLines;
// }

// function blankLineTemplate(length) {
//   let blankBodyLine = '|' + ' '.repeat(length) + '|';
//   return blankBodyLine;
// }

// function bodyMessage(text) {
//   let body = '| ' + text + ' |';
//   return body;
// }

// function logInBox(message) {
//   let boderLength = message.length + 2;
//   console.log(topAndBottomTemplate(boderLength));
//   console.log(blankLineTemplate(boderLength));
//   console.log(bodyMessage(message));
//   console.log(blankLineTemplate(boderLength));
//   console.log(topAndBottomTemplate(boderLength));
// }

// logInBox('Hello');
// logInBox('To boldly go where no one has gone before.');

// after reviewing solution

function logInBox(message) {
  let horizontalRule = `+${'-'.repeat(message.length + 2)}+`;
  let emptyLine = `|${' '.repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldy go where no one has gone before.');
