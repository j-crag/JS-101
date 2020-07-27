const multiply = (num1, num2) => num1 * num2;

function square(number) {
  return multiply(number, number);
}

console.log(square(-5));
console.log(square(10));

function powerOfN(number, power) {
  return multiply(number, number) ** (power - 1);
}

console.log(powerOfN(10, 2));
console.log(powerOfN(10, 3));
console.log(powerOfN(5, 2));
console.log(powerOfN(5, 3));
