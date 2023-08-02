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
var isSymmetric = function (root) {
  if (root === null) {
      return true;
  }

  return compare2Node(root.left, root.right);
};

function compare2Node(node1, node2) {
  if (node1 === null && node2 === null) {
      return true;
  }

  const node1Value = node1 ? node1.val : null;
  const node2Value = node2 ? node2.val : null;

  if (node1Value !== node2Value) {
      return false;
  }

  return compare2Node(node1.left, node2.right) && compare2Node(node1.right, node2.left);
}