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
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  if (nums.length === 2) {
    const firstNode = new TreeNode(nums[0]);
    const secondNode = new TreeNode(nums[1]);

    secondNode.left = firstNode;

    return secondNode;
  }

  const center = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[center]);

  root.left = sortedArrayToBST(nums.slice(0, center));
  root.right = sortedArrayToBST(nums.slice(center + 1));

  return root;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
