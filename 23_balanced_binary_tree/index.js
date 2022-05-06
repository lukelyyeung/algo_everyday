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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let result = true;

  // Check every node and also return max depth
  function getTreeDepth(root) {
    if (!root) {
      return 0;
    }

    const leftMaxDepth = getTreeDepth(root.left);
    const rightMaxDepth = getTreeDepth(root.right);

    if (Math.abs(leftMaxDepth - rightMaxDepth) > 1) {
      result = false;
    }

    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
  }

  getTreeDepth(root);

  return result;
};


// Follow-up: Solution without recursion