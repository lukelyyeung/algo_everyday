/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

// 2nd approach of using stack
var invertTreeV2 = function (root) {
  if (!root) {
    return null;
  }

  const stack = [root]; 

  while (stack.length > 0) {
    const node = stack.pop();

    if (node != null) {
      const tempLeft = node.left;
      node.left = node.right;
      node.right = tempLeft;

      stack.push(node.right, node.left);
    }
  }

  return root;
};
