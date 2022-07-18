const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let buffer;

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (!buffer) {
      buffer = s[i];
      continue;
    }

    if (symbols[s[i]] - symbols[buffer] > 0) {
      result += symbols[s[i]] - symbols[buffer];
      buffer = undefined;
    } else {
      result += symbols[buffer];
      buffer = s[i];
    }
  }

  if (buffer) {
    result += symbols[buffer];
  }

  return result;
}

assert.equal(romanToInt('LVIII'), 58);
assert.equal(romanToInt('III'), 3);
assert.equal(romanToInt('MCMXCIV'), 1994);
