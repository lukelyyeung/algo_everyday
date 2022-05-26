const assert = require('assert');

const states = {
  signAndNumber: 'signAndNumber',
  number: 'number',
  end: 'end',
};

/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  let number = 0;
  let sign;
  let state = states.signAndNumber;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!/[\d+-]+/.test(char)) {
      if (char === ' ' && state === states.signAndNumber) {
        continue;
      }

      break;
    }

    if (char === '+' || char === '-') {
      if (state !== states.signAndNumber) {
        break;
      }

      sign = char;
      state = states.number;
      continue;
    }

    state = states.number;

    number = number * 10 + +char;
  }

  return Math.min(Math.max(-(2 ** 31), number * (sign === '-' ? -1 : 1)), 2 ** 31 - 1);
}

assert.equal(myAtoi('42'), 42);
assert.equal(myAtoi('   -42'), -42);
assert.equal(myAtoi('   -36666666-hel world'), -36666666);
assert.equal(myAtoi('words and 987'), 0);
assert.equal(myAtoi('   +1'), 1);
assert.equal(myAtoi('+-12'), 0);
assert.equal(myAtoi('4193 with words'), 4193);
assert.equal(myAtoi('0000-42hellow'), 0);
assert.equal(myAtoi('123-'), 123);
