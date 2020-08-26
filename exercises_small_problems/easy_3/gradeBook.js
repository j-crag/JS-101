// - write a function that returns the letter grade associated with the mean of 3 scores passed to it
//  explicit rules:
//  - input: Number, 3 arg representing grades
//  - output: string, letter representing grade associated with mean score
//  - Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

//  - all values will be between 0 and 100, no negative vals or vals > 100.
//  implicit rules:
//  - 0 is an accepted value.

// Algorithm
//  - Compute mean score (sum of grades / number of scores)
//  - return letter grade based on mean

function getGrade(grade1, grade2, grade3) {
  let score = (grade1 + grade2 + grade3) / 3;

  if (score >= 90 && score <= 100) {
    return 'A';
  }
  if (score >= 80 && score < 90) {
    return 'B';
  }
  if (score >= 70 && score < 80) {
    return 'C';
  }
  if (score >= 60 && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// examples:
// console.log(getGrade(95, 90, 93)); // "A"
// console.log(getGrade(50, 50, 95)); // "D"

function getGrade2(grade1, grade2, grade3) {
  let score = (grade1 + grade2 + grade3) / 3;

  let range = [
    [60, 'F'],
    [70, 'D'],
    [80, 'C'],
    [90, 'B'],
  ];
  for (let index = 0; index < range.length; index += 1) {
    if (score < range[index][0]) return range[index][1];
  }
  return 'A';
}

console.log(getGrade2(95, 90, 93)); // "A"
console.log(getGrade2(50, 50, 95)); // "D"
console.log(getGrade2(90, 90, 89)); // "B"
console.log(getGrade2(99, 99, 99)); // "A"
