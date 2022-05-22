function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }
  
  if (root === p || root === q) {
    return root;
  }

  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);

  if (leftNode && rightNode) {
    return root;
  }

  if (rightNode) {
    return rightNode;
  }

  return leftNode;
}


/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }
  
  if (root === p || root === q) {
    return root;
  }

  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);

  if (leftNode && rightNode) {
    return root;
  }

  if (rightNode) {
    return rightNode;
  }

  return leftNode;
}