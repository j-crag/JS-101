// explicit rules:
//  - input: number
//  - output: number as is if its a double number, number multiplied by 2 if not.
//  - double number ===> even lengthed number, with left side digits same as right side.

// Algorithm:
//  - check number input to see if it's a double number
//  - return number as is if its a double
//  - multiply it by 2 and return it if its not.

// problem: check if its a double
//   - coerce number to string
//   - assign first and second half of number to different variables
//   - compare variables for alphanumeric equality.

// first version

function twice(number) {
  if (String(number).length % 2 !== 0) {
    console.log(number * 2);
  }
  if (String(number).length % 2 === 0) {
    let firstSide = String(number).slice(0, String(number).length / 2);
    let secondSide = String(number).slice(String(number).length / 2);
    if (firstSide === secondSide) {
      console.log(number);
    } else {
      console.log(number * 2);
    }
  }
}

// after reviewing solution

function isDoubleNumber(number) {
  let stringNum = String(number);
  let center = Math.floor(stringNum.length / 2);
  let leftNum = stringNum.substring(0, center);
  let rightNum = stringNum.substring(center);

  return leftNum === rightNum;
}

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
