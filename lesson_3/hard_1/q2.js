//What does the last line in the following code output?

let object = { first: [1] };
let numArray = object['first'];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // => {first: [1]}

// numArray is assigned the reference to the array stored in the object at value 'first'.
// When this array is altered by the .push() method that alters the array in place, the
// reference at numArray points to the original array stored in the heap at the object's
// value 'first'.
