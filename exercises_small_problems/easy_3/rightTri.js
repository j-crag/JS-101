// explicit rules:
//  - Number, positive integer 'n;
//  - logs triangle with each side of length 'n'
//  - hypotenuse faces to the left side, with base down.

// implicit rules:
//  - number of spaces increases as number of start decreases
//      - 5 stars, 0 spaces; 4 stars, 1 space...1 star, 4 spaces.

// Algorithm
//  - log n stars as first, bottom row
//  - log n - 1 stars, until only 1 star is logged

// problem: logging varying # of stars
//  - set an index to the integer input 'n'
//  - decrement by one each time a line is logged
//      - use n - 1 to determine amount of stars logged.

function triangle(starNum) {
  for (let index = starNum; index > 0; index -= 1) {
    let star = '*'.repeat(starNum - index);
    let space = ' '.repeat(index);
    let line = space + star;
    console.log(line);
  }
}

triangle(5);
triangle(9);
