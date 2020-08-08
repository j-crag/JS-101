// will the code raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// no - if numbers is logged, it reads [1, 2, 3, <3 empty items, 5]

//bonus

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; // what will this line return?

// it return undefined, but the slot is empty until explicit assignment.
