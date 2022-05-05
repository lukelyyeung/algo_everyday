/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // top: sr - 1, sc
  // bottom: sr + 1, sc
  // left: sr, sc - 1
  // right: sr, sc + 1

  // Create a stack
  // flood fill and push 4 directionalities if same colors
  // until stack is empty

  const stack = [[sr, sc]];
  const targetColor = image[sr][sc];

  if (targetColor === newColor) {
    return image;
  }

  // const filledMap = {};

  while (stack.length) {
    const pixel = stack.pop();

    const row = pixel[0];
    const col = pixel[1];

    // if (filledMap[`${row}.${col}`]) {
    //   continue;
    // }

    image[row][col] = newColor;
    // filledMap[`${row}.${col}`] = true;

    const prevRow = row - 1;
    if (image[prevRow] && image[prevRow][col] === targetColor) {
      stack.push([prevRow, col]);
    }

    const nextRow = row + 1;
    if (image[nextRow] && image[nextRow][col] === targetColor) {
      stack.push([nextRow, col]);
    }

    const prevCol = col - 1;
    if (image[row][prevCol] === targetColor) {
      stack.push([row, prevCol]);
    }

    const nextCol = col + 1;
    if (image[row][nextCol] === targetColor) {
      stack.push([row, nextCol]);
    }
  }

  return image;
};