/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  // Lower bound binary search with predicate function
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const center = Math.floor((left + right) / 2);

      const isBad = isBadVersion(center);

      if (isBad) {
        right = center;
      } else {
        left = center + 1;
      }
    }

    return left;
  };
};
