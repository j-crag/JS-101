function isOdd(integer) {
  if (Math.abs(integer) % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
console.log(isOdd(-10000000)); // => false
console.log(isOdd(100000001)); // => true
