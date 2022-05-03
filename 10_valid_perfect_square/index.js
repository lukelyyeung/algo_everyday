/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
    // Lower-bound binary search ?
    // 1 < x < x^2

    let left = 0;
    let right = Math.floor(num / 2);

    while (left <= right) {
      const center = Math.floor((left + right) / 2);

      if (center * center === num) {
        return true;
      }

      if (center * center > num) {
        right = center - 1;
      } else {
        left = center + 1;
      }
    }

    return left * left === num;
};

console.log(isPerfectSquare(65536));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(15));