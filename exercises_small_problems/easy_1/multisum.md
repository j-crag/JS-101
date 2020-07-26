PROBLEM:

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

---

PROCESS/NOTES: - assume number taken as argument is integer > 1 - input: NUMBER > 1 - compute sum of ALL numbers between 1 (NON INCLUSIVE) and input number(INCLUSIVE) that are multiples of 3 or 5 - non repeating mulitiple (15 is a multiple of both 3 and 5, do not repeat 15 in sum twice)
  


---

EXAMPLES/TEST CASES:
multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(15): // 50
multisum(1000); // 234168

---

ALGO:
START
  
 # takes a number > 1 as argument
  
 SET counter = 1
SET sum = 0
  
 WHILE counter <= number
counter = counter + 1
IF counter divisible by 3 OR 5
sum = sum + counter
counter + 1
ELSE
counter + 1
  
 RETRUN sum
  
 PRINT counter
