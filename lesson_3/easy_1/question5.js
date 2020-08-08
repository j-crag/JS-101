//What will the following code output?

console.log(false == '0'); // => true

// when a boolean is compared to any non boolean value using the non strict equality operator,
// it's first coerced to a number and then re-evaluated. In this case, the second comparison
// would the coerce the string to a number, so 0 == 0 is true.

console.log(false === '0'); // => false

// in this case, the string equality operator only returns true
// when the type and value are both the same, so it returns false.
