/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const costTable = {
    0: 0,
  };

  const minInterval = coins.sort((a, b) => a - b)[0] ?? 1;

  // Generate table for answer of smaller amount
  for (let i = minInterval; i <= amount; i++) {
    let cost = Number.POSITIVE_INFINITY;
    coins.forEach((coin) => {
      if (i - coin >= 0) {
        // The cost of each step equal to previous answer + 1 which is the current step
        cost = Math.min((costTable[i - coin] ?? Number.POSITIVE_INFINITY) + 1, cost);
      }
    });

    costTable[i] = cost;
  }

  const finalCost = costTable[amount]

  return (finalCost === Number.POSITIVE_INFINITY || finalCost === undefined) ? -1 : finalCost;
}
