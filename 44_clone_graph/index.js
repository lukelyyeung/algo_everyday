function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
// 1st approach to breadth search until all node visited
// then iterate over the node and fill back the neighbors

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const createdNodes = [];
  const clonedNodeMapWithIndex = {};
  const originalNodeMapWithIndex = {};
  const stacks = [node];

  while (stacks.length > 0) {
    const target = stacks.pop();
    if (!originalNodeMapWithIndex[target.val]) {
      const cloneNode = new Node(target.val, []);
      clonedNodeMapWithIndex[target.val] = cloneNode;
      originalNodeMapWithIndex[target.val] = target;
      createdNodes.push(cloneNode);
      stacks.push(...target.neighbors);
    }
  }

  createdNodes.forEach((node) => {
    originalNodeMapWithIndex[node.val].neighbors.forEach((neighbor) => {
      const clonedNeighbor = clonedNodeMapWithIndex[neighbor.val];
      node.neighbors.push(clonedNeighbor);
    });
  });

  return createdNodes[0];
};
