const assert = require('assert');

var uniquePaths = function (m, n) {
  const answers = {};
  const answerKey = `${m}*${n}`;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || j === 1) {
        answers[`${i}*${j}`] = 1;
      } else {
        answers[`${i}*${j}`] = answers[`${i - 1}*${j}`] + answers[`${i}*${j - 1}`];
      }

      if (answers[answerKey] !== undefined) {
        return answers[answerKey];
      }
    }
  }

  return 0;
};

assert.equal(uniquePaths(3, 7), 28);
