// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = Number(prompt("Enter a number"));

if (number % 2 == 0) {
  alert("number is even");
} else {
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

// 3. Convert the above code using`?` terniary operator

let numA = Number(prompt("Enter a number"));
let numB = Number(prompt("Enter a number"));

// if (numA > numB) {
//   alert(numA);
// } else {
//   alert(numB);
// }

alert(numA > numB ? numA : numB);

/*


4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("Enter the house name");

// if (houseName === "stark") {
//   alert(" Winter is coming");
// } else if (houseName === "lannister") {
//   alert(" A lannister always pays his debt");
// } else {
//   alert(" All men must die");
// }

// 5. Convert the above code using`?` terniary operator
// houseName === "stark"
//   ? alert(" Winter is coming")
//   : houseName === "lannister"
//   ? alert(" A lannister always pays his debt")
//   : alert(" All men must die");
// Switch

switch (houseName) {
  case "stark":
    alert(" Winter is coming");
    break;
  case "lannister":
    alert(" A lannister always pays his debt");
    break;
  default:
    alert(" All men must die");
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = Number(prompt("Enter the month"));

switch (month) {
  case 1:
    alert("number of days in the month is 31");
    break;
  case 2:
    alert("number of days in the month is 28");
    break;
  case 3:
    alert("number of days in the month is 31");
    break;
  case 4:
    alert("number of days in the month is 30");
    break;
  case 5:
    alert("number of days in the month is 31");
    break;
  case 6:
    alert("number of days in the month is 30");
    break;
  case 7:
    alert("number of days in the month is 31");
    break;
  case 8:
    alert("number of days in the month is 31");
    break;
  case 9:
    alert("number of days in the month is 30");
    break;
  case 10:
    alert("number of days in the month is 31");
    break;
  case 11:
    alert("number of days in the month is 30");
    break;
  case 12:
    alert("number of days in the month is 31");
    break;
  default:
    alert("Invalid input");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary = Number(prompt("Enter your salary"));

if (salary <= 20000) {
  var tax = 10;
  var taxAmt = (tax / 100) * salary;
  salary = salary - taxAmt;
  alert(salary);
} else if (salary <= 40000) {
  var tax = 20;
  var taxAmt = (tax / 100) * salary;
  salary = salary - taxAmt;
  alert(salary);
} else if (salary > 50000) {
  var tax = 30;
  var taxAmt = (tax / 100) * salary;
  salary = salary - taxAmt;
  alert(salary);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("Enter your marks"));
// if (marks > 100) {
//   alert("Marks can't be greater than 100");
// } else if (marks > 80 && marks < 100) {
//   alert("Grade A");
// } else if (marks > 50 && marks < 80) {
//   alert("Grade B");
// } else if (marks > 30 && marks < 50) {
//   alert("Grade C");
// } else if (marks > 0) {
//   alert("Grade D");
// }

// Switch

switch (marks) {
  case "marks > 100":
    alert("Marks can't be greater than 100");
  case "marks > 80 && marks < 100":
    alert("Grade A");
  case "marks > 50 && marks < 80":
    alert("Grade B");
  case "marks > 30 && marks < 50":
    alert("Grade C");
  case "marks > 0":
    alert("Grade D");
  default:
    alert("not a valid input");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("What is the weather like outside?");
if (weather === "sunny") {
  alert(`Wear a T-shirt`);
} else if (weather === "rainy") {
  alert(`Don't forget to take your raincoat`);
} else if (weather === "hot") {
  alert("Get a hanky");
} else if (weather === "freezing") {
  alert(`Get your sweeter on`);
} else {
  alert(`Not a valid input`);
}
