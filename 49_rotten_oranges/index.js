const assert = require('node:assert');

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let lastRottenOranges = [];
  let goodOrangeCount = 0;
  let minutes = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      const orange = grid[x][y];

      if (orange === 1) {
        goodOrangeCount++;
      }

      if (orange === 2) {
        lastRottenOranges.push([x, y]);
      }
    }
  }

  while (goodOrangeCount > 0) {
    const oldGoodOrangeCount = goodOrangeCount;
    let newRottenOranges = [];
    lastRottenOranges.forEach(([x, y]) => {
      if (grid[x - 1]?.[y] === 1) {
        grid[x - 1][y] = 2;
        newRottenOranges.push([x - 1, y]);
        goodOrangeCount--;
      }

      if (grid[x + 1]?.[y] === 1) {
        grid[x + 1][y] = 2;
        newRottenOranges.push([x + 1, y]);
        goodOrangeCount--;
      }

      if (grid[x]?.[y - 1] === 1) {
        grid[x][y - 1] = 2;
        newRottenOranges.push([x, y - 1]);
        goodOrangeCount--;
      }

      if (grid[x]?.[y + 1] === 1) {
        grid[x][y + 1] = 2;
        newRottenOranges.push([x, y + 1]);
        goodOrangeCount--;
      }
    });

    if (oldGoodOrangeCount === goodOrangeCount) {
      return -1;
    }

    lastRottenOranges = newRottenOranges;
    minutes++;
  }

  return minutes;
};

assert.equal(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  4,
);
assert.equal(orangesRotting([[0, 2]]), 0);
assert.equal(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
  -1,
);
