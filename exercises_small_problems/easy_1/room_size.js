/*
UNDERSTANDING
input ===> numbers (length and width in meters) 
output ===> numbers(square feet, square meters)
rules:
  - must ask the user to input 2 numbers, length of room and width of room in meters.
  - must be positive numbers greater than 0.
  - for simplicity, remove decimal places

EXAMPLES
roomSize(10, 10) ===> "the area of the room is 100.00 square meters (1,076.39 square feet)"
roomSize(100, 50) ===> "the area of the room is 5000.00 square meters (53,819.50 feet)"
roomSize(10, 7) ===> "the area of the room is 70.00 square meters (753.47 square feet")

DATA
string and number

ALGO
- use readline sync to get room lenth and width in meters from user
- compute area in meters and area in feet
- output area in meters and feet to console
*/

let readline = require('readline-sync');

const METERS_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters: ');
let length = readline.prompt();
length = parseInt(length, 10);

console.log('Enter the width of the room in meters: ');
let width = readline.prompt();
width = parseInt(width, 10);

let areaMeters = length * width;
let areaFeet = areaMeters * METERS_TO_FEET;

console.log(
  `The area of the room is ${areaMeters.toFixed(
    2
  )} square meters (${areaFeet.toFixed(2)} square feet.)`
);
