//Will the following functions return the same results?

function first() {
  return {
    prop1: 'hi there',
  };
}

function second() {
  return;
  {
    prop1: 'hi there';
  }
}

console.log(first());
console.log(second());

// no, function first has an expected return value of 'prop1: 'hi there', while function
// second returns undefined. The unexpected behavior occurs because the JS engine inserts
// ommitted semicolons where it thinks they belong. In this case, it inserts one after
// the 'return' statement in function first.
