const assert = require('assert');

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
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  const saved = [];

  function dfs(node) {
    if (!node) {
      return;
    }

    dfs(node.left);
    saved.push(node.val);
    dfs(node.right);
  }

  dfs(root.left);

  if (saved.length >= k) {
    return saved[k - 1];
  }

  saved.push(root.val);

  if (saved.length >= k) {
    return saved[k - 1];
  }

  dfs(root.right);

  return saved[k - 1];
}

assert.equal(kthSmallest(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), 1), 1);
assert.equal(kthSmallest(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), 2), 2);
assert.equal(kthSmallest(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), 3), 3);
assert.equal(kthSmallest(new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)), 4), 4);
assert.equal(kthSmallest(new TreeNode(2, new TreeNode(1), null), 1), 1);
