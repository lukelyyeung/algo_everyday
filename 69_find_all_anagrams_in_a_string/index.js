const assert = require('assert');

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const expectedHashMap = p.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  let left = 0;
  let right = p.length - 1;

  const countMap = s
    .split('')
    .slice(left, right + 1)
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] ?? 0) + 1;
      return acc;
    }, {});

  const results = [];

  while (right < s.length) {
    if (isShallowContain(countMap, expectedHashMap)) {
      results.push(left);
    }

    countMap[s.charAt(left)] = countMap[s.charAt(left)] - 1;
    countMap[s.charAt(right + 1)] = (countMap[s.charAt(right + 1)] ?? 0) + 1;

    left++;
    right++;
  }

  return results;
}

/**
 * @param  {Record<string, any>} obj1
 * @param  {Record<string, any>} toBeContained
 */
function isShallowContain(obj, toBeContained) {
  return Object.keys(toBeContained).every((key) => obj[key] === toBeContained[key]);
}

assert.deepEqual(findAnagrams('cbaebabacd', 'abc'), [0, 6]);
assert.deepEqual(findAnagrams('abab', 'ab'), [0, 1, 2]);
assert.deepEqual(findAnagrams('aa', 'bb'), []);
