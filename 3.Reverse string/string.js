// Implement a function that reverses a string without using the built-in reverse method

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const original = "Hello, world!";
const reversed = reverseString(original);
console.log(reversed);
