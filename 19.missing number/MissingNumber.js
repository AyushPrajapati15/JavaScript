function findMissingNumber(nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;

    let actualSum = 0;
  
    for (let i = 0; i < n; i++) {
      actualSum += nums[i];
    }
  

    return expectedSum - actualSum;
  }
  
 
  const nums = [3, 0, 1];
  const missingNumber = findMissingNumber(nums);
  console.log(`The missing number is: ${missingNumber}`);
  