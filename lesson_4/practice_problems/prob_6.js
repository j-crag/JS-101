//How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

// We can find out how this method works by referencing the MDN docs. According to MDN, the fill method
// changes all elements in the array to a static value, from a start index to the end of the array.
// It returns the modified array. We can confirm this in the node repl.

// In this example, it should return the modified array [1, 1, 1, 1, 1].

console.log(arr);

// An interesting thing to note about this example is that giving the method an ending index paramater that
// is greater than the length of the current array will expand the array to include an additional element.
