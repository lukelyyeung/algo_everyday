/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  let start = 0;
  let end = x;

  while (start <= end) {
    const base = Math.floor((start + end) / 2);
    const squaredValue = base * base;

    if (squaredValue === x) {
      return base;
    }

    if (squaredValue > x) {
      end = base - 1;
    } else {
      start = base + 1;
    }
  }

  return Math.floor((start + end) / 2);
}
