const assert = require('assert');
const { deserializeLinkedList, serializeLinkedList } = require('../utils/linkedList');

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  // 1,2,3,4,5,6
  // 1,6,2,5,3,4

  // 1,2,3,4
  // 5,6 -> 6,5

  // 1,2,3,4,5,6,7
  // 1,7,2,6,3,5,4

  // iterate the linkedList to get length
  // iterate again to get the Math.ceil(nodeLength / 2)
  // separate into 2 list
  // reverse the 2nd list
  // iterate the 2nd list and insert to the 1st list
  // update the cursor in 1st list after insert

  let length = 0;
  let cursor = head;

  while (cursor) {
    cursor = cursor.next;
    length++;
  }

  let pointToCut = Math.ceil(length / 2);
  let nodesToBeInserted;
  length = 0;
  cursor = head;

  while (cursor) {
    if (length === pointToCut - 1) {
      let originalCursor = cursor;
      cursor = cursor.next;
      originalCursor.next = null;
    } else if (length >= pointToCut) {
      let originalCursor = cursor;
      cursor = cursor.next;
      originalCursor.next = nodesToBeInserted;
      nodesToBeInserted = originalCursor;
    } else {
      cursor = cursor.next;
    }

    length++;
  }

  cursor = head;

  while (nodesToBeInserted) {
    let originalNodeToBeInserted = nodesToBeInserted;
    nodesToBeInserted = nodesToBeInserted.next;

    originalNodeToBeInserted.next = cursor.next;
    cursor.next = originalNodeToBeInserted;
    cursor = cursor.next.next;
  }

  return head;
}

assert.deepStrictEqual(deserializeLinkedList(reorderList(serializeLinkedList([1, 2, 3, 4, 5, 6]))), [1, 6, 2, 5, 3, 4]);
assert.deepStrictEqual(deserializeLinkedList(reorderList(serializeLinkedList([1, 2, 3, 4, 5]))), [1, 5, 2, 4, 3]);
assert.deepStrictEqual(deserializeLinkedList(reorderList(serializeLinkedList([]))), []);
assert.deepStrictEqual(deserializeLinkedList(reorderList(serializeLinkedList([1, 2]))), [1, 2]);
assert.deepStrictEqual(deserializeLinkedList(reorderList(serializeLinkedList([1, 2, 3]))), [1, 3, 2]);
