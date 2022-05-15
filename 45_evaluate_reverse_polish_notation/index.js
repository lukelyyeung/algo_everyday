const assert = require('assert');

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = {
    '/': true,
    '+': true,
    '*': true,
    '-': true,
  };

  let index = 0;

  while (tokens.length > 1) {
    const token = tokens[index];

    if (operators[token]) {
      const intermediate = eval(tokens[index - 2], tokens[index - 1], token);
      tokens.splice(index - 2, 3, intermediate + '');
      index -= 2;
    }

    index++;
  }

  return +tokens[0];
};

function eval(numeric1, numeric2, operator) {
  if (operator === '+') {
    return +numeric1 + +numeric2;
  }

  if (operator === '-') {
    return +numeric1 - +numeric2;
  }

  if (operator === '*') {
    return +numeric1 * +numeric2;
  }

  if (operator === '/') {
    return Math.trunc(+numeric1 / +numeric2);
  }
}

assert.equal(evalRPN(['2', '1', '+', '3', '*']), 9);
assert.equal(evalRPN(['4', '13', '5', '/', '+']), 6);
assert.equal(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']), 22);
