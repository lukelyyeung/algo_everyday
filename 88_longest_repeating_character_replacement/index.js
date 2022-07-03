const assert = require('assert');

// TODO: Change to O(N) solution
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  let left = 0;
  let right = 0;
  let maxLength = Number.NEGATIVE_INFINITY;
  let firstReplacementIndex;
  let repeatingChar = s[0];
  let replacementCount = k;

  while (right < s.length) {
    if (s[right] !== repeatingChar) {
      if (replacementCount === 0) {
        replacementCount = k;
        left = firstReplacementIndex ?? right;
        right = left;
        repeatingChar = s[right];
        firstReplacementIndex = undefined;
        continue;
      }

      if (typeof firstReplacementIndex === 'undefined') {
        firstReplacementIndex = right;
      }

      replacementCount--;
    }

    maxLength = Math.max(maxLength, right - Math.max(0, left - replacementCount) + 1);
    right++;
  }

  return maxLength;
}

assert.equal(characterReplacement('ABAB', 2), 4);
assert.equal(characterReplacement('AABABBA', 1), 4);
assert.equal(characterReplacement('AABBABBA', 2), 6);
assert.equal(characterReplacement('ABAA', 0), 2);
assert.equal(characterReplacement('ABBB', 2), 4);
