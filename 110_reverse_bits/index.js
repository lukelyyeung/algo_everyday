/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
  let power = 0;

  while (Math.pow(2, power) < n) {
    power++;
  }

  let reversed = 0;
  while (power >= 0) {
    if (n === 0) {
      return reversed;
    }

    if (n >= Math.pow(2, power)) {
      reversed += Math.pow(2, 31 - power);
      n -= Math.pow(2, power);
    }

    power--;
  }

  return reversed;
}

console.log(reverseBits(2));
