const assert = require('assert');

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  let left = 0;
  let right = matrix.length * matrix[0].length - 1;
  const lengthOfRow = matrix[0].length;

  while (left <= right) {
    const center = Math.floor((left + right) / 2);
    const rowIndex = Math.floor(center / lengthOfRow);
    const columnIndex = center - lengthOfRow * rowIndex;

    if (target === matrix[rowIndex][columnIndex]) {
      return true;
    }

    if (target > matrix[rowIndex][columnIndex]) {
      left = center + 1;
    } else {
      right = center - 1;
    }
  }

  return false;
}

assert.equal(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
  true,
);
assert.equal(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
  false,
);

assert.equal(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    11,
  ),
  true,
);

assert.equal(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    30,
  ),
  true,
);

assert.equal(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    60,
  ),
  true,
);

assert.equal(searchMatrix([[1]], 0), false);
assert.equal(searchMatrix([[1]], 1), true);
assert.equal(searchMatrix([[1]], 2), false);
