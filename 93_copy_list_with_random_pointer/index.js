function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  // original
  const createdNodes = new Map();

  let clonedHead;
  let clonedCursor;
  let cursor = head;

  while (cursor) {
    let clonedNode;

    if (createdNodes.has(cursor)) {
      clonedNode = createdNodes.get(cursor);
    } else {
      clonedNode = new Node(cursor.val);
      createdNodes.set(cursor, clonedNode);
    }

    if (!clonedHead) {
      clonedHead = clonedNode;
      clonedCursor = clonedNode;
    } else {
      clonedCursor.next = clonedNode;
      clonedCursor = clonedNode;
    }

    if (cursor.random) {
      let clonedRandom;

      if (createdNodes.has(cursor.random)) {
        clonedRandom = createdNodes.get(cursor.random);
      } else {
        clonedRandom = new Node(cursor.random.val);
        createdNodes.set(cursor.random, clonedRandom);
      }
      clonedNode.random = clonedRandom;
    } else {
      clonedNode.random = null;
    }

    cursor = cursor.next;
  }

  return clonedHead;
}
