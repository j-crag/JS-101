function penultimate(string) {
  let wordsList = string.split(' ');
  return wordsList[wordsList.length - 2];
}

console.log(penultimate('this is not it but x marks the X spot') === 'X');

// further exploration

function middleWord(string) {
  if (typeof string !== 'string') return "Hey guys that's not a string!";
  let words = string.split(' ');
  let midPoint = words.length / 2;
  if (words.length % 2 === 0) {
    return `There isn't any middle word, but here are the two middle words. '${
      words[midPoint - 1]
    }' and '${words[midPoint]}'`;
  } else {
    midPoint = parseInt(midPoint);
    return `The middle word is ${words[midPoint]}`;
  }
}

console.log(middleWord('first')); // first
console.log(middleWord('first second')); // first, second
console.log(middleWord('first second third')); // second
console.log(middleWord('first second third fourth')); // second third
console.log(middleWord('first second third fourth fifth')); // third
console.log(middleWord(1));
