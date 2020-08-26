// - input: string
// - output: string
// rules:
//  - return new string with all non alph chars replaced by spaces, if there is more that one non
//    alph char in a row, should only be replaced by 1 space.

// Algorithm
//  - initialize empty string for results
//  - loop over input string
//  - check each char to see if its an alphabet char
//        - replace with single space if 1 or more non alph char
//  - return string

// Problem: check each char
// - create functions that check code point values of each char in string
// - if it's alph == > concat to new string
// - if its not alph && last index is not a space ==> concat a space.

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp('asdsd 0123 asd039///  / + -=123'));
