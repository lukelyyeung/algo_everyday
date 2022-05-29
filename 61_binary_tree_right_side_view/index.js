function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  // Run a level-order transverse
  // Only push the last node to the result
  if (!root) {
    return [];
  }

  const currentLevel = [root];
  const results = [];
  const nextLevel = [];

  while (currentLevel.length) {
    const node = currentLevel.shift();

    if (node.left) {
      nextLevel.push(node.left);
    }

    if (node.right) {
      nextLevel.push(node.right);
    }

    if (!currentLevel.length) {
      currentLevel = nextLevel;
      nextLevel = [];
      results.push(node);
    }
  }

  return results;
}

rightSideView();