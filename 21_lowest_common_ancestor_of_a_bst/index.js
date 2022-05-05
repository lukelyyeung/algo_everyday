/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;

  return this;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const pathOfP = [];
  const pathOfQ = new Map();

  let pNode;
  let qNode;
  let cursor = root;

  while (!pNode) {
    if (cursor.val === p.val) {
      pNode = cursor;
    }

    pathOfP.unshift(cursor);

    cursor = p.val > cursor.val ? cursor.right : cursor.left;
  }

  cursor = root;

  while (!qNode) {
    if (cursor.val === q.val) {
      qNode = cursor;
    }

    pathOfQ.set(cursor, true);

    cursor = q.val > cursor.val ? cursor.right : cursor.left;
  }

  for (let i = 0; i < pathOfP.length; i++) {
    if (pathOfQ.get(pathOfP[i])) {
      return pathOfP[i];
    }
  }
};
