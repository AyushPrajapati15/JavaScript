// function to check if a string is a palindrome or not

function isPalindrome(string) {
  const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return cleanedStr === cleanedStr.split("").reverse().join("");
}


console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
