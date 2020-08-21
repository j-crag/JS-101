// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// first version
function minAge(obj) {
  return Object.values(obj).sort()[0];
}

console.log(minAge(ages));

//second version
function minAge2(obj) {
  return Math.min(...Object.values(obj));
}

console.log(minAge2(ages));
