// Write three different ways to remove all of the elements from the following array:

//first way
let numbers = [1, 2, 3, 4];

for (let index = numbers.length; index > 0; index -= 1) {
  numbers.pop();
}

console.log(numbers);

//second way
let nums2 = [1, 2, 3, 4];
let emptyArray = nums2.filter(function (element) {
  element === undefined;
});
console.log(emptyArray);

//third way
let nums3 = [1, 2, 3, 4];
nums3.length = 0;
console.log(nums3);

// fourth way
let nums4 = [1, 2, 3, 4];
console.log(nums4.splice(0, nums4.length));
