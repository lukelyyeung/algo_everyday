const assert = require('assert');

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findMinHeightTrees(n, edges) {
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const adjacencyMap = {};
  const connectionCount = new Map();

  edges.forEach(([edgeA, edgeB]) => {
    adjacencyMap[edgeA] = adjacencyMap[edgeA] ?? [];
    adjacencyMap[edgeA].push(edgeB);
    adjacencyMap[edgeB] = adjacencyMap[edgeB] ?? [];
    adjacencyMap[edgeB].push(edgeA);
    connectionCount.set(edgeA, adjacencyMap[edgeA].length);
    connectionCount.set(edgeB, adjacencyMap[edgeB].length);
  });

  let edgesToBeRemoved = [];
  connectionCount.forEach((value, key) => {
    if (value === 1) {
      edgesToBeRemoved.push(key);
    }
  });

  while (connectionCount.size > 2) {
    const nextEdgesToBeRemoved = [];
    edgesToBeRemoved.forEach((edge) => {
      connectionCount.delete(edge);
      adjacencyMap[edge].forEach((adjacentEdge) => {
        if (connectionCount.has(adjacentEdge)) {
          const newConnectionCount = connectionCount.get(adjacentEdge) - 1;
          if (newConnectionCount === 1) {
            nextEdgesToBeRemoved.push(adjacentEdge);
          }
          connectionCount.set(adjacentEdge, newConnectionCount);
        }
      });
    });

    edgesToBeRemoved = nextEdgesToBeRemoved;
  }

  return [...connectionCount.keys()];
}

assert.deepStrictEqual(
  findMinHeightTrees(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 4],
    [4, 5],
  ]),
  [3],
);
// assert.deepStrictEqual(
//   findMinHeightTrees(4, [
//     [1, 0],
//     [1, 2],
//     [1, 3],
//   ]),
//   [1],
// );
assert.deepEqual(
  findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ]),
  [3, 4],
);
