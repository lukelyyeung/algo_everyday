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
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let result = '[';

  let currentLevel = [root];
  let nextLevel = [];

  while (currentLevel.length) {
    let hasNonNullInNextLevel = false;
    const acc = [];
    currentLevel.forEach((node) => {
      acc.push(node?.val ?? 'null');
      if (node) {
        nextLevel.push(node.left, node.right);
        hasNonNullInNextLevel = hasNonNullInNextLevel || Boolean(node.left || node.right);
      }
    });

    if (!hasNonNullInNextLevel) {
      result +=
        acc
          .reduceRight((acc, cur) => {
            if (cur === 'null' && acc.length === 0) {
              return acc;
            }

            acc.unshift(cur);
            return acc;
          }, [])
          .join(',') + ',';
      break;
    }

    result += acc.join(',') + ',';

    currentLevel = nextLevel;
    nextLevel = [];
  }

  return result.replace(/,$/, ']');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === '[]') {
    return null;
  }

  const nodes = data
    .replace(/[\[\]]/g, '')
    .split(',')
    .map((str) => {
      if (str === 'null') {
        return null;
      }

      return new TreeNode(+str);
    });

  let shift = 0;
  nodes.forEach((node, index) => {
    if (!node) {
      shift += 2;
      return;
    }

    node.left = nodes[index * 2 + 1 - shift] ?? null;
    node.right = nodes[index * 2 + 2 - shift] ?? null;
  });

  return nodes[0];
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
