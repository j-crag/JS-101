let munstersDescription = 'The Munsters are creepy and spooky.';

//First version
const UPPER_CASE = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
  I: 'I',
  J: 'J',
  K: 'K',
  L: 'L',
  M: 'M',
  N: 'N',
  O: 'O',
  P: 'P',
  Q: 'Q',
  R: 'R',
  S: 'S',
  T: 'T',
  U: 'U',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  X: 'Z',
};

let chars = munstersDescription.split('');
console.log(chars);

let newLine = [];

for (let index = 0; index < chars.length; index += 1) {
  if (chars[index] === UPPER_CASE[chars[index]]) {
    newLine.push(chars[index].toLocaleLowerCase());
  } else {
    newLine.push(chars[index].toUpperCase());
  }
}

newLine = newLine.join('');
console.log(newLine);

// second version
let switched = munstersDescription
  .split('')
  .map(function (char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })
  .join('');

console.log(switched);
