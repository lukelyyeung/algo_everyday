/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const dict = s.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  let hasCenterCharTook = false;

  return Object.values(dict).reduce((length, availableCharCount) => {
    const isEven = availableCharCount % 2 === 0;
    if (!hasCenterCharTook && !isEven) {
      hasCenterCharTook = true;
      length++;
    }

    return length + (isEven ? availableCharCount : availableCharCount - 1);
  }, 0);
};
