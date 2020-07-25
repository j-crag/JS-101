/*
PROBLEM:
Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

---
NOTES: 
	- input: String 
    - output: Number 
    - Takes string, returns sum of the ASCII values of every character in the string 
    
----
EXAMPLE/TEST CASES:
    asciiValue('Four score');         // 984
    asciiValue('Launch School');      // 1251
    asciiValue('a');                  // 97
    asciiValue('');                   // 0

-----
ALGO: 
	- take input in the form of a string
    - convert string input into array of ASCII values
    - for every ASCII charater in the string, determine its corresponding numeric value
    - compute the sum of each numeric value
    - return
    
PSEUDO-CODE:

START

# Given a string of ASCII characters called 'string' 

SET asciiArray = Array(string input)
SET numericArray = []

FOR each element of asciiArray
	- convert element to numeric value 
    - push numeric value to array numericArray
    
RETURN sum of the numericArray
END
*/

// first version

function asciiValue(string) {
  let numericArray = [];
  for (let index = 0; index < string.length; index += 1) {
    numericArray.push(string.charCodeAt(index));
  }
  return numericArray.reduce((a, b) => a + b, 0);
}

console.log(asciiValue('jeff')); // 411
console.log(asciiValue('Four score')); // 984
console.log(asciiValue('Launch School')); // 1251
console.log(asciiValue('a')); // 97
console.log(asciiValue('')); // 0

// revised version

function asciiValue2(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }
  return sum;
}

console.log(asciiValue2('jeff')); // 411
console.log(asciiValue2('Four score')); // 984
console.log(asciiValue2('Launch School')); // 1251
console.log(asciiValue2('a')); // 97
console.log(asciiValue2('')); // 0
