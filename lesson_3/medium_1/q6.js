// What will the following code output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// It will output false. NaN is a numeric value that represents failue of an operation to return a number.
// JS doesn't let you use '==' or '===' to check whether a value is 'NaN'.

//How do you reliably test if a value is NaN?

console.log(Number.isNaN(nanArray[0]));
