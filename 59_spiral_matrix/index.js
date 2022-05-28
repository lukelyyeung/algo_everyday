const assert = require('assert');

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  if (matrix.length === 1) {
    return matrix[0];
  }

  const visited = new Map();
  let direction = 'right'; // right,left,up,down
  let x = 0;
  let y = 0;
  const result = [matrix[0][0]];

  function getKey(x, y) {
    return visited.get(`${x}.${y}`);
  }

  function setKey(x, y) {
    return visited.set(`${x}.${y}`, true);
  }

  setKey(0, 0);

  while (true) {
    if (direction === 'right') {
      if (matrix[y][x + 1] !== undefined && !getKey(x + 1, y)) {
        x++;
        result.push(matrix[y][x]);
        setKey(x, y);
      } else if (matrix[y + 1]?.[x] !== undefined && getKey(x, y + 1)) {
        return result;
      } else {
        direction = 'down';
      }

      continue;
    }

    if (direction === 'down') {
      if (matrix[y + 1]?.[x] !== undefined && !getKey(x, y + 1)) {
        y++;
        result.push(matrix[y][x]);
        setKey(x, y);
      } else if (matrix[y][x - 1] !== undefined && getKey(x - 1, y)) {
        return result;
      } else {
        direction = 'left';
      }

      continue;
    }

    if (direction === 'left') {
      if (matrix[y][x - 1] !== undefined && !getKey(x - 1, y)) {
        x--;
        result.push(matrix[y][x]);
        setKey(x, y);
      } else if (matrix[y - 1]?.[x] !== undefined && getKey(x, y - 1)) {
        return result;
      } else {
        direction = 'up';
      }
      continue;
    }

    if (direction === 'up') {
      if (matrix[y - 1]?.[x] !== undefined && !getKey(x, y - 1)) {
        y--;
        result.push(matrix[y][x]);
        setKey(x, y);
      } else if (matrix[y][x + 1] !== undefined && getKey(x + 1, y)) {
        return result;
      } else {
        direction = 'right';
      }
      continue;
    }
  }
}

assert.deepEqual(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [1, 2, 3, 6, 9, 8, 7, 4, 5],
);
assert.deepEqual(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
  [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
);

assert.deepEqual(
  spiralOrder([
    [23, 18, 20, 26, 25],
    [24, 22, 3, 4, 4],
    [15, 22, 2, 24, 29],
    [18, 15, 23, 28, 28],
  ]),
  [23, 18, 20, 26, 25, 4, 29, 28, 28, 23, 15, 18, 15, 24, 22, 3, 4, 24, 2, 22],
);
