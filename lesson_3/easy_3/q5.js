//The following function unnecessarily uses two return statements to return boolean values.
//How can you eliminate the unnecessary duplication?

function isColorValid(color) {
  if (color === 'blue' || color === 'green') {
    return true;
  } else {
    return false;
  }
}

// first solution
let isColorValid1 = (color) => {
  return color === 'blue' || color === 'green';
};

//second solution
let isColorValid2 = (color) => ['bliue', 'green'].includes(color);

//third solution
let isColorValid3 = (color) => (color ? true : false);

console.log(isColorValid('red'));
console.log(isColorValid1('red'));
console.log(isColorValid2('orange'));
console.log(isColorValid3('blue'));
