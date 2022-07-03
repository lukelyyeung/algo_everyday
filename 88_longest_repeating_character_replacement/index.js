const assert = require('assert');

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  let left = 0;
  let right = 0;

  const charCount = {
    [s[0]]: 1,
  };
  let maxLength = Number.NEGATIVE_INFINITY;

  function isStringRepeating() {
    const minimalCountOfRepeatedChar = Math.max(0, right - left + 1 - k);

    if (minimalCountOfRepeatedChar === 0) {
      return true;
    }

    return Object.values(charCount).some((count) => count >= minimalCountOfRepeatedChar);
  }

  while (right >= left && right < s.length) {
    if (isStringRepeating()) {
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
      const newChar = s[right];
      charCount[newChar] = (charCount[newChar] || 0) + 1;
    } else {
      const charToBeRemoved = s[left];
      charCount[charToBeRemoved] = charCount[charToBeRemoved] - 1;
      left++;
    }
  }

  return maxLength;
}

assert.equal(characterReplacement('ABAB', 2), 4);
assert.equal(characterReplacement('AABABBA', 1), 4);
assert.equal(characterReplacement('AABBABBA', 2), 6);
assert.equal(characterReplacement('ABAA', 0), 2);
assert.equal(characterReplacement('ABBB', 2), 4);
