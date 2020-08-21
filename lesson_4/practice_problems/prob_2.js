//What is the return value of map in the following code? Why?

[1, 2, 3].map((num) => {
  num * num;
});

// In this case, the callback function is missing it's explicit return statement, so it will return a new
// array of [undefined, undefined, undefined].
