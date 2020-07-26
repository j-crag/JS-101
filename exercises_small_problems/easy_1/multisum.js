function multisum(number) {
  let counter = 1;
  let sum = 0;

  while (counter <= number) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter;
      counter += 1;
    } else {
      counter += 1;
    }
  }
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(15)); // 60
console.log(multisum(20)); // 98
console.log(multisum(1000)); // 234168
