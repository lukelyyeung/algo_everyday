const assert = require('assert');

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const requiredWordCount = t.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  let left = 0;
  let right = 0;
  const wordCount = {};

  // @TODO: may not need to do this every time
  while (!isContainContagious(wordCount, requiredWordCount) && right < s.length) {
    wordCount[s[right]] = (wordCount[s[right]] ?? 0) + 1;
    right++;
  }

  if (!isContainContagious(wordCount, requiredWordCount)) {
    return '';
  }

  right--;

  let result = s.substring(left, right + 1);
  let missingLetter;

  while (left <= right && right < s.length) {
    if (!missingLetter) {
      const charToRemove = s[left];
      wordCount[charToRemove] = wordCount[charToRemove] - 1;

      if (requiredWordCount[charToRemove] > 0 && wordCount[charToRemove] < requiredWordCount[charToRemove]) {
        missingLetter = charToRemove;
        left++;
        continue;
      }

      left++;
      if (result.length > right - left + 1) {
        result = s.substring(left, right + 1);
      }

      continue;
    }

    right++;
    const charToAdd = s[right];

    wordCount[charToAdd] = (wordCount[charToAdd] ?? 0) + 1;

    if (charToAdd === missingLetter && wordCount[charToAdd] >= requiredWordCount[charToAdd]) {
      missingLetter = null;
    }
  }

  return result;
}

function isContainContagious(current, required) {
  return Object.entries(required).every(([key, count]) => current[key] >= count);
}

assert.deepStrictEqual(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
assert.deepStrictEqual(minWindow('a', 'a'), 'a');
assert.deepStrictEqual(minWindow('a', 'aa'), '');
assert.deepStrictEqual(minWindow('ab', 'a'), 'a');
assert.deepStrictEqual(minWindow('ab', 'b'), 'b');
assert.deepStrictEqual(minWindow('aa', 'aa'), 'aa');
