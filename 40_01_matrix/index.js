// DP approach with recursion
// TODO: Could we have better DP ? from top left to bottom right and then reverse to find the smaller one
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const resultantMatrix = [...new Array(mat.length)].map((_) =>
    [...new Array(mat[0].length)].map((_) => Number.POSITIVE_INFINITY),
  );

  for (let i = 0; i < mat.length; i++) {
    // const rowOfDistances = [];
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) {
        resultantMatrix[i][j] = 0;
      }

      if (i > 0) {
        resultantMatrix[i][j] = Math.min(resultantMatrix[i][j], resultantMatrix[i - 1][j] + 1);
      }
      if (j > 0) {
        resultantMatrix[i][j] = Math.min(resultantMatrix[i][j], resultantMatrix[i][j - 1] + 1);
      }
    }
  }

  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[0].length - 1; j >= 0; j--) {
      if (i < mat.length - 1) {
        resultantMatrix[i][j] = Math.min(resultantMatrix[i][j], resultantMatrix[i + 1][j] + 1);
      }
      if (j < mat[0].length - 1) {
        resultantMatrix[i][j] = Math.min(resultantMatrix[i][j], resultantMatrix[i][j + 1] + 1);
      }
    }
  }

  return resultantMatrix;
};
