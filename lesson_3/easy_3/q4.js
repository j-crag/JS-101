//What will the following code output?

let arr1 = [{ first: 'value1' }, { second: 'value2' }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// the output will be an arr1 with it's first value changed to 42. Assigning arr2 the value
// arr1.slice() passes arr2 an entirely new array, but it's only a shallow copy. Nested objects will
// be effected by altering this copy.
