/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const letterMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const possibilities = [];

  for (let i = 0; i < digits.length; i++) {
    const chars = letterMap[digits.charAt(i)];

    if (chars) {
      possibilities.push(chars);
    }
  }

  const results = [];

  backTracking('', digits.length, results, possibilities);

  return results;
}
/**
 * @param  {string} existingStr
 * @param  {number} targetLength
 * @param  {string[]} results
 * @param  {string[][]} possibilities
 */
function backTracking(existingStr, targetLength, results, possibilities) {
  if (possibilities.length === 0) {
    return;
  }
  
  const charSets = possibilities[0];

  for (let i = 0; i < charSets.length; i++) {
    const newString = existingStr + charSets.charAt(i);

    if (newString.length === targetLength) {
      results.push(newString);
    } else {
      backTracking(newString, targetLength, results, possibilities.slice(1));
    }
  }
}
