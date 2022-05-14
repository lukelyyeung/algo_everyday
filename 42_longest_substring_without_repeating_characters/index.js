/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  if (!s) {
    return 0;
  }

  let max = 1;
  const charCounts = {
    [s[0]]: 1,
  };
  let left = 0;
  let right = 0;
  let current = 1;

  let duplicatedChar = null;

  while (left <= right && right < s.length - 1) {
    if (duplicatedChar) {
      charCounts[s[left]] = charCounts[s[left]] - 1;

      if (s[left] === duplicatedChar) {
        duplicatedChar = null;
      }
      left++;
      current--;
    } else {
      right++;
      current++;
      if (charCounts[s[right]]) {
        duplicatedChar = s[right];
        charCounts[s[right]] = charCounts[s[right]] + 1;
      } else {
        charCounts[s[right]] = 1;
        max = Math.max(current, max);
      }
    }
  }
  return max;
}
