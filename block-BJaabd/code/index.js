// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = +prompt("Enter your age");

if (age < 4) {
  alert("Hey Kiddo! Can You Walk ?");
} else if (age >= 4 && age <= 11) {
  alert(" You are too young to participate in the marathon");
} else if (age >= 12 && age <= 55) {
  alert("You can participate in the marathon");
} else {
  alert("You are too old to participate in the marthon");
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]

let n = +prompt("Enter the number ");

let repeatedE = "e".repeat(n);

alert(`h${repeatedE}llo`);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]

let number = +prompt("Enter the numbers");
let sum = 0;
let currentNum = 1;

while (currentNum <= number) {
  sum = sum + currentNum;
  currentNum++;
}
alert(sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]

let num = prompt("Enter a number");

switch (num) {
  case "One":
    alert(`number is equal to 1`);
    break;
  case "Two":
    alert(`number is equal to 2`);
    break;
  case "Three":
    alert(`number is equal to 3`);
    break;
  case "Four":
    alert(`number is equal to 4`);
    break;
  case "Five":
    alert(`number is equal to 5`);
    break;
  case "Six":
    alert(`number is equal to 6`);
    break;
  case "Seven":
    alert(`number is equal to 7`);
    break;
  case "Eight":
    alert(`number is equal to 8`);
    break;
  case "Nine":
    alert(`number is equal to 9`);
    break;
  default:
    alert(`PLEASE TRY AGAIN`);
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]

let marks = +prompt("Enter your marks");

switch (true) {
  case marks > 90:
    alert("AA");
    break;
  case marks > 80 && marks <= 90:
    alert("AB");
    break;
  case marks > 70 && marks <= 80:
    alert("BB");
    break;
  case marks > 60 && marks <= 70:
    alert("BC");
    break;
  case marks > 50 && marks <= 60:
    alert("CC");
    break;
  case marks > 40 && marks <= 50:
    alert("CD");
    break;
  case marks > 30 && marks <= 40:
    alert("DD");
    break;
  case marks <= 30:
    alert("FF");
    break;
    break;
  default:
    alert("Enter a valid input");
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]

let numA = +prompt("Enter numA");
let numB = +prompt("Enter numB");
if (numA > numB) {
  alert(numA);
} else {
  alert(numB);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

let num1 = +prompt("Enter num1");
let num2 = +prompt("Enter num2");
let num3 = +prompt("Enter num3");

let product = num1 * num2 * num3;
if (product > 0) {
  alert("+");
} else {
  alert("-");
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]

let number1 = +prompt("Enter a number1");
let number2 = +prompt("Enter a number2");
let operator = prompt("Enter an operator");

if (operator === "+") {
  alert(number1 + number2);
} else if (operator === "-") {
  alert(number1 > number2 ? number1 - number2 : `${number2} > ${number1}`);
} else if (operator === "*") {
  alert(number1 * number2);
} else if (operator === "/") {
  alert(number1 > number2 ? number1 / number2 : `${number2} > ${number1}`);
}
