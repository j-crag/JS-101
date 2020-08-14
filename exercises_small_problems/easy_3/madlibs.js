let readline = require('readline-sync');

console.log('Enter a noun: ');
let noun = readline.prompt();

console.log('Enter a verb: ');
let verb = readline.prompt();

console.log('Enter an adjective: ');
let adjective = readline.prompt();

console.log('Enter an adverb: ');
let adverb = readline.prompt();

let sentence1 = `So you thought ${verb} ${noun} before ${adverb} playing tennis with the ${adjective} Queen was a good idea?`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;
console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
