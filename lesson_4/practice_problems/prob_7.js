//What is the return value of map in the following code? Why?

let arr = ['ant', 'bear'].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

// The first value 'ant' evaluates to false by the if conditon and isn't returned. When a callback doesn't
// have an explicit value to return, it implicitly returns 'undefined'.

console.log(arr);
