/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  strs.sort((a, b) => a.length - b.length);

  const unifidedStrs = strs.map((str) => str.split('').sort().join(''));

  const results = [];
  const grouped = {};

  for (let i = 0; i < strs.length; i++) {
    const leader = strs[i];

    if (grouped[leader]) {
      continue;
    }

    const group = [leader];
    for (let j = i + 1; j < strs.length; j++) {
      const candidate = strs[j];

      if (candidate.length !== leader.length) {
        break;
      }

      if (unifidedStrs[j] === unifidedStrs[i]) {
        grouped[candidate] = true;
        group.push(candidate);
      }
    }

    results.push(group);
  }

  return results;
}
