const assert = require('assert');

// Ugly approach, worth a 2nd try

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const solutions = [];
  const usedSolutions = {};
  function backTracking(currentCombination, sum) {
    candidates.forEach((candidate) => {
      if (sum + candidate > target) {
        return;
      }

      if (sum + candidate === target) {
        const solution = [...currentCombination, candidate];
        solution.sort();
        const solutionKey = solution.join(',');

        if (usedSolutions[solutionKey]) {
          return;
        }
        usedSolutions[solutionKey] = true;
        solutions.push([...currentCombination, candidate]);
        return;
      }

      backTracking([...currentCombination, candidate], sum + candidate);
    });
  }

  backTracking([], 0);

  return solutions;
};

assert.deepEqual(combinationSum([2], 1), []);
assert.deepEqual(combinationSum([2, 3, 6, 7], 7), [[2, 2, 3], [7]]);
assert.deepEqual(combinationSum([2, 3, 5], 8), [
  [2, 2, 2, 2],
  [2, 3, 3],
  [3, 5],
]);
