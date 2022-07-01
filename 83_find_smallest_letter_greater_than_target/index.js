const assert = require('assert');

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
function nextGreatestLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let upperBound;

  while (left <= right) {
    const center = Math.floor((left + right) / 2);

    if (letters[center] > target) {
      upperBound = center;
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return letters[upperBound] ?? letters[0];
}

assert.equal(nextGreatestLetter(["c","f","j"], 'a'), 'c');
assert.equal(nextGreatestLetter(["c","f","j"], 'd'), 'f');
