function TreeNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

function insertLevelOrder(arr, i) {
  let root = null;
  // Base case for recursion
  if (i < arr.length) {
    root = new TreeNode(arr[i]);

    // insert left child
    root.left = insertLevelOrder(arr, 2 * i + 1);

    // insert right child
    root.right = insertLevelOrder(arr, 2 * i + 2);
  }
  return root;
}

function createBSTFromArray(array) {
  return insertLevelOrder(array, 0);
}

module.exports = createBSTFromArray;
