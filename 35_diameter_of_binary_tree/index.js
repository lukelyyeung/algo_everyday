function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  let max = 0;

  function reportMaxDepth(node) {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      return 1;
    }

    const leftMaxDepth = reportMaxDepth(node.left);
    const rightMaxDepth = reportMaxDepth(node.right);

    max = Math.max(leftMaxDepth + rightMaxDepth);

    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
  }

  reportMaxDepth(root);

  return max;
}

console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5)))));
console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(5)))));
console.log(diameterOfBinaryTree(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)))));
