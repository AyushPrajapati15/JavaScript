function isPrime(num) {
    
    if (num < 2) {
      return false;
    }
  

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
  
    return true; 
  }
  
  
  const number = 17;
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
  