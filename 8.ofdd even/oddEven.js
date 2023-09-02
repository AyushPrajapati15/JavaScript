function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Test the function with some numbers
  console.log("4 is " + isEvenOrOdd(4));
  console.log("7 is " + isEvenOrOdd(7));
  console.log("12 is " + isEvenOrOdd(12));
  