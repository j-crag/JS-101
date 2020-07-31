function toInteger(string) {
  const DIGITS = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,
  };

  let arrayOfDigits = string.split('').map((char) => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = (10 * value) + digit));
  return value;
}

function signedInteger(string) {
  switch (string[0]) {
    case '-':
      return -toInteger(string.slice(1, string.length));
      break;
    case '+':
      return toInteger(string.slice(1, string.length));
      break;
    default:
      return toInteger(string);
  }
}

console.log(signedInteger('-123'));
console.log(signedInteger('123'));
console.log(signedInteger('+123'));

