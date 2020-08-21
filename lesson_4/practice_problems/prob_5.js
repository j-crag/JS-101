// What is the callback's return value in the following code? Also,
// what is the return value of every in this code?

[1, 2, 3].every((num) => {
  return (num = num * 2);
});

// The every method test whether ALL elements of an array pass a test implemented by the callback function.
// In this case, the callback is reassigning each value to its current value * 2. Each returned value
// will be a truthy value, so the every function will return 'true'.
