/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
  if (!root) {
    return false;
  }

  return isSameTree(root, subRoot) || isSubtree(root?.left, subRoot) || isSubtree(root?.right, subRoot);
}

function isSameTree(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1?.val !== root2?.val) {
    return false;
  }

  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}
