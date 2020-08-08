//What will the following code output?

let str1 = 'hello there';
let str2 = str1;
str2 = 'goodbye!';
console.log(str1);

// will output >> 'hello there'. In javascript, primitives are passed by value. When
// str2 is assigned str1, it only receieves a copy of the value of str1.
// str1's content will not be altered by any alteration on str2 and str2 is assigned an entirey
// new string value.
