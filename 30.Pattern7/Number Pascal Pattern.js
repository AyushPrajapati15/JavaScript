let n = 5;
let string = "";
// Pyramid
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= i; k++) {
    string += k;
  }
  string += "\n";
}
// Reverse Pyramid
for (let i = 1; i <= n - 1; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);