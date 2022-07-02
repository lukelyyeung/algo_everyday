/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const cellGroupDigitCounts = [...new Array(9)].map((i) => ({}));
  const rowGroupDigitCounts = [...new Array(9)].map((i) => ({}));
  const columnGroupDigitCounts = [...new Array(9)].map((i) => ({}));

  // row
  for (let i = 0; i < board.length; i++) {
    // column
    for (let j = 0; j < board[0].length; j++) {
      const cell = board[i][j];

      if (cell === '.') {
        continue;
      }

      if (rowGroupDigitCounts[i][cell] === 1) {
        return false;
      } else {
        rowGroupDigitCounts[i][cell] = 1;
      }

      if (columnGroupDigitCounts[j][cell] === 1) {
        return false;
      } else {
        columnGroupDigitCounts[j][cell] = 1;
      }

      const cellGroupIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (cellGroupDigitCounts[cellGroupIndex][cell] === 1) {
        return false;
      } else {
        cellGroupDigitCounts[cellGroupIndex][cell] = 1;
      }
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);
console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);
