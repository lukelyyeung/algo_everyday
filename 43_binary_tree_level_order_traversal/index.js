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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  let currentLevel = [root];
  let nextLevel = [];

  while (currentLevel.length) {
    const valuesOfCurrentLevel = [];
    currentLevel.forEach((node) => {
      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }

      valuesOfCurrentLevel.push(node.val);
    });

    result.push(valuesOfCurrentLevel);

    currentLevel = nextLevel;
    nextLevel = [];
  }

  return result;
};
