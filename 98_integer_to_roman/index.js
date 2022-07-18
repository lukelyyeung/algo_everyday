const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const symbols = [
    {
      symbol: 'I',
      value: 1,
    },
    {
      symbol: 'V',
      value: 5,
    },
    {
      symbol: 'X',
      value: 10,
    },
    {
      symbol: 'L',
      value: 50,
    },
    {
      symbol: 'C',
      value: 100,
    },
    {
      symbol: 'D',
      value: 500,
    },
    {
      symbol: 'M',
      value: 1000,
    },
  ];

  let symbolIndex = symbols.length - 1;
  let result = '';
  let integer = +s;

  while (integer !== 0) {
    const currentSymbol = symbols[symbolIndex];

    if (currentSymbol.value > integer) {
      let numericString = integer.toString();
      let isAtLeastHalf = integer / currentSymbol.value >= 0.5;

      if (!isAtLeastHalf) {
        symbolIndex--;
      } else if (numericString.startsWith('9')) {
        result += symbols[symbolIndex - 2].symbol + currentSymbol.symbol;
        integer -= currentSymbol.value - symbols[symbolIndex - 2].value;
        symbolIndex -= 2;
      } else if (numericString.startsWith('4')) {
        result += symbols[symbolIndex - 1].symbol + currentSymbol.symbol;
        integer -= currentSymbol.value - symbols[symbolIndex - 1].value;
        symbolIndex -= 2;
      } else {
        symbolIndex--;
      }

      continue;
    }

    const multiplier = Math.floor(integer / currentSymbol.value);
    result += currentSymbol.symbol.repeat(multiplier);
    integer -= currentSymbol.value * multiplier;
  }

  return result;
}

assert.equal(romanToInt(3), 'III');
assert.equal(romanToInt(58), 'LVIII');
assert.equal(romanToInt(1994), 'MCMXCIV');
assert.equal(romanToInt(4), 'IV');
