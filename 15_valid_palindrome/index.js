/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const sanitizedString = s.replace(/[^a-zA-Z0-9]/gm, '');
  for (let i = 0; i <= Math.floor((sanitizedString.length - 1) / 2); i++) {
    if (sanitizedString[i].toLowerCase() !== sanitizedString[sanitizedString.length - 1 - i].toLowerCase()) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));
// console.log("A man, a plan, a canal: Panama".replace(/[^a-zA-Z]/gm, ""));
