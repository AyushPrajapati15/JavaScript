// Create a program that takes a student's score as input and then displays their corresponding letter grade (A, B, C, D, or F) using an if...else statement.

function score(num) {
  if (num >= 90) {
    return "Grade A";
  } else if (num >= 80 && num < 90) {
    return "Grade B";
  } else if (num >= 70 && num < 80) {
    return "Grade C";
  } else if (num >= 60 && num <= 70) {
    return "Grade D";
  } else if (num >= 50 && num <= 60) {
    return "Grade E";
  } else return "Sorry! you are fail";
}

console.log(score(85));
console.log(score(50));
console.log(score(45));
