//Take a look at the following array.

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

//Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// first version

function switchKeysAndValues(obj) {
  let keyValues = Object.entries(flintstones);
  let switched = keyValues.map((keyValue) => {
    let [key, value] = keyValue;
    let newKeyValue = [value, Number(key)];
    return newKeyValue;
  });
  return Object.fromEntries(switched);
}

console.log(switchKeysAndValues(flintstones));

// second version, simplified

function switched2(obj) {
  let newObj = {};

  obj.forEach((name, index) => {
    newObj[name] = index;
  });
  return newObj;
}

console.log(switched2(flintstones));
