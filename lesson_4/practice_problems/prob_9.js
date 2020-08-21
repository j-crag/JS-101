// Add up all of the ages from the Munster family object:

const { sum } = require('lodash');

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// using reduce

function addAges(obj) {
  return Object.values(obj).reduce((a, b) => a + b);
}

console.log(addAges(ages));

// using forEach

function sumAges(obj) {
  let totalAges = 0;
  Object.values(obj).forEach((age) => (totalAges += age));
  return totalAges;
}

console.log(sumAges(ages));
