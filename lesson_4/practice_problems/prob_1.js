//What is the return value of the filter method call below? Why?

[1, 2, 3].filter((num) => 'hi');

// the methods return value will be [1,2,3].

// The filter method checks the return value of the callback function provided to see if it's truthy.
// In this case, the return value will always be 'hi', so it returns a new array with all the elements of
// the old one.
