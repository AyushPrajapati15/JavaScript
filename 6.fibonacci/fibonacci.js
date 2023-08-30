// Implement a function to calculate the nth Fibonacci number.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let fibPrev = 0;
  let fibCurr = 1;

  for (let i = 2; i <= n; i++) {
    const temp = fibCurr;
    fibCurr = fibPrev + fibCurr;
    fibPrev = temp;
  }

  return fibCurr;
}

// Test cases
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
