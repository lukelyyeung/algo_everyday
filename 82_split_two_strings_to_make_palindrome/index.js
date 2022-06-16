const assert = require('assert');

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
function checkPalindromeFormation(a, b) {
  if (a.length === 1) {
    return true;
  }

  return canFormPalindrome(a, b) || canFormPalindrome(b, a);
}

function canFormPalindrome(a, b) {
  const half = Math.ceil(a.length / 2);

  for (let i = 0; i < half; i++) {
    if (b.charAt(i) !== a.charAt(a.length - 1 - i)) {
      const subStringOfB = b.substring(i, a.length - i);

      if (isPalindrome(subStringOfB)) {
        return true;
      }

      const subStringOfA = a.substring(i, a.length - i);

      return isPalindrome(subStringOfA);
    }
  }

  return true;
}

function isPalindrome(a) {
  const half = Math.ceil(a.length / 2);

  for (let i = 0; i < half; i++) {
    if (a.charAt(i) !== a.charAt(a.length - i - 1)) {
      return false;
    }
  }

  return true;
}

assert.equal(checkPalindromeFormation('a', 'b'), true);
assert.equal(checkPalindromeFormation('xbdef', 'xecab'), false);
assert.equal(checkPalindromeFormation('ulacfd', 'jizalu'), true);
assert.equal(checkPalindromeFormation('abda', 'acmc'), false);
assert.equal(
  checkPalindromeFormation('aejbaalflrmkswrydwdkdwdyrwskmrlfqizjezd', 'uvebspqckawkhbrtlqwblfwzfptanhiglaabjea'),
  true,
);
assert.equal(checkPalindromeFormation('abc', 'cba'), true);
