// function to check if a string is a palindrome or not
function isPalindrome(string) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        // Compare the cleaned string with its reverse
        return cleanedStr === cleanedStr.split('').reverse().join('');
      }
      
      // Test cases
      console.log(isPalindrome("racecar"));   // true
      console.log(isPalindrome("hello"));     // false
      console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
