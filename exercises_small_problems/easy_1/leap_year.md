PROBLEM:
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

---

NOTES: - leap year: divisible by 4 and not 100 - leap year: divisile by 100 and 400. - rules valid for any year > 0. - for now, will not validate input, assume that it will be valid number > 0.
  
 input: any year > 0
output: leap year = TRUE
NOT LEAP YEAR = FALSE

---

EXAMPLES/TESTS:
isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // false
isLeapYear(1); // false
isLeapYear(100); // false
isLeapYear(400); // true

---

ALGO:

START
  
 # given a year number > 0
  
 IF year is divisible by 4 AND NOT divisible by 100
RETURN true
  
 IF year is divisible by 100 AND divisible by 400
RETURN true
  
 ELSE RETURN false
