// Given a string, return a new string that replaces every
// occurrence of the word "important" with "urgent":

const { not } = require('@hapi/joi');

let advice =
  'Few things in life are as important as house training your pet dinosaur.';

let newAdvice = advice.replace('important', 'urgent');

//console.log(newAdvice);

// replace multiple occurances of 'important'

let sentence =
  'important word word jeff important jeff important jeff important important';

console.log(sentence.split('important').join('urgent'));
