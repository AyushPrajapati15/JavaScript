function isPrime(num) {
    // Check if the number is less than 2 (0 and 1 are not prime)
    if (num < 2) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // It's divisible by i, so it's not prime
      }
    }
  
    return true; // It's not divisible by any number other than 1 and itself, so it's prime
  }
  
  // Example usage:
  const number = 17;
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
  