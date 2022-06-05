/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const firstChar = word.charAt(0);

  const charCountMap = {};

  const startingPoints = board.reduce((acc, row, i) => {
    row.forEach((char, j) => {
      charCountMap[char] = (charCountMap[char] ?? 0) + 1;
      if (char === firstChar) {
        acc.push([i, j]);
      }
    });
    return acc;
  }, []);

  for (let i = 0; i < word.length; i++) {
    if (!charCountMap[word[i]]) {
      return false;
    }

    charCountMap[word[i]] = charCountMap[word[i]] - 1;
  }

  let wordExists = false;

  function backTrack(board, word, [i, j], visited = {}) {
    if (wordExists) {
      return;
    }

    if (!word) {
      wordExists = true;
    }

    console.log({ visited, word });

    if (board[i - 1]?.[j] === word[0] && !visited[`${i - 1}.${j}`]) {
      backTrack(board, word.substring(1), [i - 1, j], { ...visited, [`${i - 1}.${j}`]: true });
    }

    if (board[i][j - 1] === word[0] && !visited[`${i}.${j - 1}`]) {
      backTrack(board, word.substring(1), [i, j - 1], { ...visited, [`${i}.${j - 1}`]: true });
    }

    if (board[i][j + 1] === word[0] && !visited[`${i}.${j + 1}`]) {
      backTrack(board, word.substring(1), [i, j + 1], { ...visited, [`${i}.${j + 1}`]: true });
    }

    if (board[i + 1]?.[j] === word[0] && !visited[`${i + 1}.${j}`]) {
      backTrack(board, word.substring(1), [i + 1, j], { ...visited, [`${i + 1}.${j}`]: true });
    }
  }

  startingPoints.forEach((point) => backTrack(board, word.substring(1), point, { [`${point[0]}.${point[1]}`]: true }));

  return wordExists;
}
