function canCompleteCircuit(gas, cost) {
  let startIndex = 0;
  let cursor = 0;
  let endIndex = gas.length - 1;
  let remainedGas = 0;

  // iterate over gas array
  // calculate the remained gas at each index
  // if not enough, reset the startIndex to cursor, endIndex to (cursor - 1 + gas.length) % gas.length
  // if current Index is the last index, return -1

  let shouldContinue = true;

  while (shouldContinue) {
    remainedGas = remainedGas + gas[cursor] - cost[cursor];
    // console.log({ remainedGas, startIndex, endIndex, cursor });

    if (remainedGas >= 0) {
      if (cursor === endIndex) {
        shouldContinue = false;
      }
      cursor = (cursor + 1) % gas.length;
      continue;
    }

    if (startIndex === gas.length - 1) {
      return -1;
    }

    cursor = (cursor + 1) % gas.length;

    if (cursor <= startIndex) {
      return -1;
    }

    endIndex = cursor - 1;
    startIndex = cursor;
    remainedGas = 0;
  }

  return startIndex;
}