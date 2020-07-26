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
