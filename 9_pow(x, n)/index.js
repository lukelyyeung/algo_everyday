/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  // 1. Unsigned the power so we dun need to concern direction
  // 2. Early return if x === 1 or -1
  // 3. Keep multiple the value with its self (a.k.a ^ 2) and cache the results
  // 4. When Math.abs(n) - current power cannot be found in cached map (i.e. is not product of ^ 2)
  // 5. Do Recursion
  const poweredValue = unsignedPow(x, n);

  if (n < 0) {
    return 1 / poweredValue;
  }

  return poweredValue;
}

function unsignedPow(x, n) {
  if (x === 1 || x === -1) {
    return n % 2 === 0 ? Math.abs(x) : x;
  }

  if (n === 0) {
    return 1;
  }

  const cached = {
    1: x,
  };

  const unsignedN = Math.abs(n);
  let currentPower = 1;
  let currentValue = x;

  while (currentPower !== unsignedN) {
    // console.log({ currentPower, currentValue, cached, unsignedN });
    currentValue *= currentValue;
    currentPower *= 2;
    cached[currentPower] = currentValue;

    if (currentPower === unsignedN) {
      return currentValue;
    } else if (cached[unsignedN - currentPower]) {
      return currentValue * cached[unsignedN - currentPower];
    } else if (currentPower > unsignedN / 2) {
      return currentValue * unsignedPow(x, unsignedN - currentPower);
    }
  }

  return currentValue;
}
