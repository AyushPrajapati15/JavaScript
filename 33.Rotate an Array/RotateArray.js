function rotateArray(arr, steps) {
    if (steps < 0) {
      // Ensure steps is non-negative
      steps = steps + arr.length;
    }
    
    steps = steps % arr.length; // Handle steps greater than array length
    
    return arr.slice(-steps).concat(arr.slice(0, arr.length - steps));
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const steps = 2; // Rotate by 2 steps to the right
  const rotatedArray = rotateArray(arr, steps);
  
  console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
  