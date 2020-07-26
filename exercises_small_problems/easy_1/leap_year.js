// first version

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// shorter version

function isLeapYear2(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

//updated function for julian leap test

function isLeapYear3(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear3(2016)); // true
console.log(isLeapYear3(2015)); // false
console.log(isLeapYear3(2100)); // false
console.log(isLeapYear3(2400)); // true
console.log(isLeapYear3(240000)); // true
console.log(isLeapYear3(240001)); // false
console.log(isLeapYear3(2000)); // true
console.log(isLeapYear3(1900)); // false
console.log(isLeapYear3(1752)); // true
console.log(isLeapYear3(1700)); // false
console.log(isLeapYear3(1)); // false
console.log(isLeapYear3(100)); // false
console.log(isLeapYear3(400)); // true
