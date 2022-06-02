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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  const rootValue = preorder[0];

  if (preorder.length === 0) {
    return null;
  }

  if (preorder.length === 1) {
    return new TreeNode(rootValue);
  }

  const indexOfRoot = inorder.findIndex((value) => value === rootValue);


  const leftSubTree = buildTree(preorder.slice(1, indexOfRoot + 1), inorder.slice(0, indexOfRoot));
  const rightSubTree = buildTree(preorder.slice(indexOfRoot + 1), inorder.slice(indexOfRoot + 1));

  const root = new TreeNode(rootValue, leftSubTree, rightSubTree);

  return root;
}

console.log(buildTree([1, 2], [2, 1]));
