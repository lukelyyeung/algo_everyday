/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  // Lower bound search to locate the row
  // Then binary search in the row for the target;

  let left = 0;
  let right = matrix.length * 2 - 1;
  let lowerBound;
  const lengthOfRow = matrix[0].length;

  while (left <= right) {
    const center = Math.floor((left + right) / 2);
    const isEndOfRow = center % 2 === 1;
    const candidate = matrix[Math.floor(center / 2)][isEndOfRow ? lengthOfRow - 1 : 0];

    if (candidate === target) {
      return true;
    }

    if (target > candidate) {
      left = center + 1;

      if (!isEndOfRow) {
        lowerBound = center;
      }
    } else {
      right = center - 1;

      if (isEndOfRow) {
        lowerBound = center;
      }
    }
  }

  const targetedRow = matrix[Math.floor(lowerBound / 2)];

  if (!targetedRow) {
    return false;
  }

  let rowStart = 0;
  let rowEnd = lengthOfRow - 1;

  while (rowStart <= rowEnd) {
    const center = Math.floor((rowStart + rowEnd) / 2);

    if (targetedRow[center] === target) {
      return true;
    }

    if (targetedRow[center] > target) {
      rowEnd = center - 1;
    } else {
      rowStart = center + 1;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    11,
  ),
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    30,
  ),
);

console.log(searchMatrix([[1]], 0));
