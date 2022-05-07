/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const cached = {};

  for (let i = 1; i <= n; i++) {
    // As the combination of last step are all candidate for next step
    // combination of last 2 steps are all candidate for next 2 step
    const waysToTop =
      (cached[i - 1] ?? (i >= 1 ? 1 : 0)) + (cached[i - 2] ?? (i >= 2 ? 1 : 0));
    cached[i] = waysToTop;
  }

  return cached[n];
};
