// Full triangle pattern
let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    string += " ";
    }
    
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);