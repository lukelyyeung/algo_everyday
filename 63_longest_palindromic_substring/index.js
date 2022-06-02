const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length === 1) {
    return s;
  }

  let longest = s[0];

  for (let i = 0; i < s.length; i++) {
    let start;
    let end;

    if (s[i - 1] === s[i]) {
      start = i - 1;
      end = i;
    } else if (s[i + 1] === s[i]) {
      start = i;
      end = i + 1;
    } else if (s[i - 1] !== undefined && s[i + 1] !== undefined && s[i - 1] === s[i + 1]) {
      start = i - 1;
      end = i + 1;
    }

    if (start || end) {
      let isIdenticalChar = s[i] === s[start] || s[i] === s[end];
      let isValidPalindrome = true;

      while (isValidPalindrome) {
        if (end - start + 1 > longest.length) {
          longest = s.substring(start, end + 1);
        }

        console.log({ start, end, i, longest, isIdenticalChar });
        if (isIdenticalChar) {
          if (s[i] === s[start - 1]) {
            start--;
            continue;
          }

          if (s[i] === s[end + 1]) {
            end++;
            continue;
          }
        }

        if (start - 1 < 0 || end + 1 > s.length - 1) {
          isValidPalindrome = false;
          continue;
        }

        start--;
        end++;

        isValidPalindrome = s[start] === s[end];
        if (isIdenticalChar) {
          isIdenticalChar = s[i] === s[start] && s[i] === s[end];
        }
      }
    }
  }
  return longest;
}
assert.equal(longestPalindrome('babad'), 'bab');
assert.equal(longestPalindrome('cbbd'), 'bb');
assert.equal(longestPalindrome('aaaa'), 'aaaa');
assert.equal(longestPalindrome('ccc'), 'ccc');
assert.equal(longestPalindrome('bccca'), 'ccc');
assert.equal(longestPalindrome('baaaaa'), 'aaaaa');
assert.equal(longestPalindrome('222020221'), '2202022');
