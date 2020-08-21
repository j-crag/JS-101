//Create an object that expresses the frequency with which each letter occurs in this string:

let statement = 'The Flintstones Rock';

//The output will look something like the following:

//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// first version
function letterCounter(string) {
  let letterCounter = {};

  return string.split('').reduce((allLetters, letter) => {
    if (letter in allLetters) {
      allLetters[letter]++;
    } else {
      allLetters[letter] = 1;
    }
    return allLetters;
  }, letterCounter);
}

// console.log(letterCounter(statement));

// second version
function letterCounter2(string) {
  let letters = string.split('').filter((letter) => letter !== ' ');

  let letterCounter = {};
  letters.forEach((char) => {
    letterCounter[char] = letterCounter[char] || 0;
    letterCounter[char] += 1;
  });
  return letterCounter;
}

// console.log(letterCounter2(statement));

// third version
function letterCounter3(string) {
  let letters = string.split('').filter((char) => char !== ' ');

  let result = {};

  letters.forEach((char) => {
    if (Object.keys(result).includes(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });

  return result;
}

// console.log(letterCounter3(statement));

// for loop

let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}

console.log(result);
