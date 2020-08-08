//Starting with the string:

let famousWords = 'seven years ago...';

//show two different ways to put the expected "Four score and " in front of it.

let missingWords = 'Four score and';

let famousQuote = missingWords + ' ' + famousWords;

let famousQuote2 = missingWords.concat(famousWords);

console.log(famousQuote, famousQuote2);
