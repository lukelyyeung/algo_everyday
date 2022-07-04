const assert = require('assert');

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  let minSpeed = 1;
  let maxSpeed = Math.max(...piles);

  // Time complexity
  // O(NlogK) where K is the maximum value in the pile
  while (minSpeed <= maxSpeed) {
    const speed = Math.floor((minSpeed + maxSpeed) / 2);

    const timeRequired = piles.reduce((total, cur) => total + Math.ceil(cur / speed), 0);

    // Unlike typical binary search which return when timeRequired equals to k
    // As we ceils the timeRequired, there is space to further compress the minSpeed
    // Lower-bound binary search
    if (timeRequired > h) {
      minSpeed = speed + 1;
    } else {
      maxSpeed = speed - 1;
    }
  }

  return minSpeed;
}

assert.equal(minEatingSpeed([3, 6, 7, 11], 8), 4);
assert.equal(minEatingSpeed([30, 11, 23, 4, 20], 5), 30);
assert.equal(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);
assert.equal(minEatingSpeed([312884470], 312884469), 2);
assert.equal(minEatingSpeed([1, 1, 1, 999999999], 10), 142857143);
