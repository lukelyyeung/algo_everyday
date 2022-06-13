/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
function jobScheduling(startTime, endTime, profit) {
  const nodes = startTime.map((cur, index) => ({
    startTime: cur,
    endTime: endTime[index],
    profit: profit[index],
  }));

  nodes.sort((a, b) => a.startTime - b.startTime);

  const dp = [];

  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];
    const lastCompatibleProfitIndex = binarySearch(nodes, i);

    const lastCompatibleProfit = dp[lastCompatibleProfitIndex] ?? 0;

    // The dp[i] represent the max profit after nodes[i].startTime
    // Therefore, by search the nearest node with upper bound startTime
    // We can get the max profit after startTime
    // dp[i + 1] is always the last largest profit.
    dp[i] = Math.max(dp[i + 1] ?? 0, lastCompatibleProfit + node.profit);
  }

  return dp[0];
}

function binarySearch(nodes, index) {
  let left = index + 1;
  let right = nodes.length - 1;
  let temp = -1;

  while (left <= right) {
    const center = Math.floor((left + right) / 2);

    if (nodes[index].endTime <= nodes[center].startTime) {
      temp = center;
      right = center - 1;
    } else {
      left = center + 1;
    }
  }

  return temp;
}
