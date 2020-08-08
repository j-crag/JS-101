// Using the following string, create a new string that contains all lowercase letters
// except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = 'the Munsters are CREEPY and Spooky.';
let example1 = 'asdadSDFSFKMldakmaDALAKmsfldksmfLAKSd';
// => The munsters are creepy and spooky.

// first version
function capitalizeFirstLetter(string) {
  let firstLetter = string.substring(0, 1).toUpperCase();
  let theRest = string
    .substring(1)
    .split('')
    .map((char) => char.toLowerCase())
    .join('');
  return firstLetter.concat(theRest);
}

console.log(capitalizeFirstLetter(munstersDescription));
console.log(capitalizeFirstLetter(example1));

// better version
let firstLetterUpper =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLocaleLowerCase();

console.log(firstLetterUpper);
