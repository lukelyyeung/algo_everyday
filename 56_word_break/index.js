const assert = require('assert');

// @TODO: Use DP approach
// Create dictMap from wordDict
// Iterate the string
// wordBreak the [0,index], and check if [index, end] in dictMap
// Store if [0, index] is wordbreakable <- DP part, for increase the speed of later wordbreak

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  const dictMap = wordDict.reduce((acc, word) => {
    acc[word] = true;
    return acc;
  }, {});

  const visited = new Map();
  const possibleIndexes = [0];

  while (possibleIndexes.length) {
    let index = possibleIndexes.shift();

    let word = '';
    for (; index < s.length; index++) {
      word += s[index];

      if (!dictMap[word]) {
        continue;
      }

      // early return the last word match
      if (index === s.length - 1) {
        return true;
      }

      if (visited.get(index + 1)) {
        continue;
      }

      visited.set(index + 1, true);
      possibleIndexes.push(index + 1);

      index++;
      word += s[index];

      while (dictMap[word]) {
        if (index === s.length - 1) {
          return true;
        }

        if (!visited.get(index + 1)) {
          visited.set(index + 1, true);
          possibleIndexes.push(index + 1);
        }

        index++;
        word += s[index];
      }
    }
  }

  return false;
}

assert(wordBreak('leetcode', ['leet', 'code']));
assert(wordBreak('applepenapple', ['apple', 'pen']));
assert(wordBreak('aaaaaaa', ['aaaa', 'aaa']));
assert(wordBreak('aaaaaaaa', ['aaa', 'aaaaa']));
assert(!wordBreak('aaaaaaaaaaaaaaaaaaaaaaaab', ['aaa', 'aaaaa']));
assert(!wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ['a', 'aaa', 'aaaaa']));
assert(wordBreak('catsandogcat', ['cats', 'dog', 'sand', 'and', 'cat', 'an']));
