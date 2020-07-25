/* 
PROCESS/UNDERSTANDING: 
	- takes 2 strings as arguments
    - determines the longer of the two strings
    - returns result of concatenating SHORT + LONG + SHORT strings 
    - strings assumed to be different lengths 
    
-------
EXAMPLES/TESTS:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
shortLongShort('xyz', '');         // "xyz"

-----
ALGO:

	START
    
    # given 2 strings as arguments
    
    SET stringOne = length of stringOne
    SET stringTwo = length of stringTwo
    
    # compare lengths of each string
    
    IF stringOne > stringTwo 
    	SET longerString = stringOne
        SET shorterString = stringTwo
    ELSE
    	SET longerString = stringTwo
        SET shorterString = stringOne
    
    SET finalString = shorterString + longerString + shorterString 
    PRINT finalString
*/

// solution before checking answer
function shortLongShort(stringOne, stringTwo) {
  let longerString;
  let shorterString;

  if (stringOne.length > stringTwo.length) {
    longerString = stringOne;
    shorterString = stringTwo;
  } else {
    longerString = stringTwo;
    shorterString = stringOne;
  }

  return shorterString + longerString + shorterString;
}

console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz')); // "xyz"
console.log(shortLongShort('xyz', '')); // "xyz"

// solution after checking answer

function shortLongShort2(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

console.log(shortLongShort2('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort2('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort2('', 'xyz')); // "xyz"
console.log(shortLongShort2('xyz', '')); // "xyz"

// arrow function with ternary statement

const shortLongShort3 = (s1, s2) =>
  s1.length > s2.length ? s2 + s1 + s2 : s1 + s2 + s1;

console.log(shortLongShort3('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort3('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort3('', 'xyz')); // "xyz"
console.log(shortLongShort3('xyz', '')); // "xyz"
