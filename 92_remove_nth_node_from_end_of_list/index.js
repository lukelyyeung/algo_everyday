const { serializeLinkedList, deserializeLinkedList } = require('../utils/linkedList');

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  // iterate once to get the n-1th item;
  // connect n-1th and n+1th item;
  // return head

  let count = 0;
  let nodeJustBeforeToBeRemoved;
  let cursor = head;

  while (cursor) {
    if (!cursor.next) {
      if (!nodeJustBeforeToBeRemoved) {
        return head.next;
      }

      nodeJustBeforeToBeRemoved.next = nodeJustBeforeToBeRemoved.next.next;
      return head;
    }

    count++;
    cursor = cursor.next;

    if (count >= n) {
      nodeJustBeforeToBeRemoved = nodeJustBeforeToBeRemoved ? nodeJustBeforeToBeRemoved.next : head;
    }
  }

  nodeJustBeforeToBeRemoved.next = nodeJustBeforeToBeRemoved.next.next;

  return head;
}

console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1, 2, 3, 4, 5]), 1)));
console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1, 2, 3, 4, 5]), 2)));
console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1, 2, 3, 4, 5]), 3)));
console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1, 2, 3, 4, 5]), 4)));
console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1, 2, 3, 4, 5]), 5)));
console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1]), 1)));
console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1, 2]), 2)));
console.log(deserializeLinkedList(removeNthFromEnd(serializeLinkedList([1, 2]), 1)));
