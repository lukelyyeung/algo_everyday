/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const results = new Array(n + 1).fill();

  let currentMagnitude = 1;

  results.forEach((_, index) => {
    if (index <= 1) {
      results[index] = index;
      return;
    }

    if (index === 2) {
      results[index] = 1;
      return;
    }

    if (index === 2 ** (currentMagnitude + 1)) {
      currentMagnitude++;
      results[index] = 1;
      return;
    }

    results[index] = 1 + results[index - 2 ** currentMagnitude];
  });

  return results;
}

countBits(5);
countBits(2);
countBits(15);
