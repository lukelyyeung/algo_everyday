const assert = require('assert');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Surprisingly easy solution by observing the range of node need to be in
// When going to left subtree, the current node value will be the max while the min is inherited
// When going to right subtree, the current node value will be the min while the max is inherited


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
var isValidBST = function (root) {
  if (!root) {
    return true;
  }

  return validateBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

/**
 * @param {TreeNode} node
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */
function validateBST(node, min, max) {
  if (node === null) {
    return true;
  }

  if (node.left?.val >= node.val || node.right?.val <= node.val) {
    return false;
  }

  if (node.val <= min || node.val >= max) {
    return false;
  }

  return validateBST(node.left, min, node.val) && validateBST(node.right, node.val, max);
}

assert.equal(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))), true);
assert.equal(isValidBST(new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)))), false);
assert.equal(isValidBST(new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)))), false);
