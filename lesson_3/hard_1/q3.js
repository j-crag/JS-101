function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ['one'];
let two = ['two'];
let three = ['three'];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// logs >> one is 'one' >>two is 'two' >>three is 'three'
// when function is invoked, local scope is created and local varialbes one, two, and
// three are initialized. They originally point to the same objects as the global variables.
// Lines 2 through 4 all locally reassign variables, they do not cause any global changes.

// // B)

function messWithVars(one, two, three) {
  one = ['two'];
  two = ['three'];
  three = ['one'];
}

let one = ['one'];
let two = ['two'];
let three = ['three'];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// logs >> one is 'one' >> two is 'two' >>three is 'three'.
// When the function is called, local scope and variables are created. Inside the
// local scope, all three variables are reassigned to different array objects.
// The reassignment inside the function's scope doesn't affect the global variables.

// // C)

function messWithVars(one, two, three) {
  one.splice(0, 1, 'two');
  two.splice(0, 1, 'three');
  three.splice(0, 1, 'one');
}

let one = ['one'];
let two = ['two'];
let three = ['three'];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// logs >> one is "two" >> two is "three" >> three is "one"
// When the function is called, local scope and variables are created. On lines 48-50,
// the splice method is used on each variable. Because the variables exhibit
// 'pass by reference' behavior here, and because the splice method is destructive,
// the global variables are all changed.
