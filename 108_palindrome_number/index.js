const asserts = require("assert");

/**
 * @param {number} x
 * @return {boolean}
*/
function isPalindrome(x) {

  // negative is not palindrome
  if (x < 0) {
    return false;
  }
  
  // single digit is a palindrome
  if (x < 10) {
    return true;
  }

  // end with 0, no integer starts with 0 so is not a palindrome
  if (x % 10 === 0) {
    return false;
  }
  
  let digit = 1;
  
  // Count the total digit
  while (x > Math.pow(10, digit)) {
    digit++;
  }
  
  let reversed = 0;
  let original = x;

  // Looping from the left to right, build the reversed
  for (let i = digit; i > 0; i--) {
    const currentDigit = Math.floor(x / Math.pow(10, i - 1));
    reversed += currentDigit * Math.pow(10, digit - i);
    x -= currentDigit * Math.pow(10, i - 1);
  }

  return reversed === original;
}

asserts(!isPalindrome(5566));
asserts(isPalindrome(1));
asserts(isPalindrome(12321));
