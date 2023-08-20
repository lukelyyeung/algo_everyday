/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  const maxPriorityQueue = new MaxPriorityQueue({
    priority: ({ count }) => count,
    compare: (a, b) => {
      if (a.count === b.count) {
        return a.value.localeCompare(b.value);
      }

      return b.count - a.count;
    },
  });

  const wordCounts = {};

  for (let i = 0; i < words.length; i++) {
    wordCounts[words[i]] = (wordCounts[words[i]] ?? 0) + 1;
  }

  let results = [];

  for (const char in wordCounts) {
    maxPriorityQueue.enqueue({
      value: char,
      count: wordCounts[char],
    });
  } 

  while (results.length < k) {
    const nextFrequent = maxPriorityQueue.dequeue();
    results.push(nextFrequent.value);
  }

  return results;
}