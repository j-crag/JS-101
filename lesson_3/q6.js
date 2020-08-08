// //suppose we build an array like this:

let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);

// //This code will create a nested array that looks like this:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// //Create a new array that contains all of the above values, but in an un-nested format:

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

//using .flat()
//let allFlinstones = flintstones.flat();

//console.log(allFlinstones);

//using .concat()
flintstones = [].concat(...flintstones);
console.log(flintstones);

let testArr = [1, 2, [3, 4, [5, 6]], [7, 8]];

testArr = [].concat(testArr);
console.log(...testArr);
testArr = [].concat(...testArr);
console.log(testArr);
testArr = [].concat(...testArr);
console.log(testArr);

let testArr2 = [1, 2, [3, 4, [5, 6]], [7, 8]];

console.log(testArr.flat());
