const assert = require('assert');

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let result = '';
  let counter = 0;
  while (true) {
    let targetChar = strs[0][counter];

    if (!targetChar) {
      return result;
    }

    for (let i = 1; i < strs.length; i++) {
      if (!strs[i][counter] || strs[i][counter] !== targetChar) {
        return result;
      }
    }

    result += targetChar;
    counter++;
  }
}

assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
assert.equal(longestCommonPrefix(['dog', 'racecar', 'car']), '');
