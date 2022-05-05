/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const visited = new Map();
  let cursor = head;

  while (cursor?.next) {
    if (visited.get(cursor)) {
      return true;
    }

    visited.set(cursor, true);

    cursor = cursor.next;
  }

  return false;
};

// 2nd approach with O(1) memory
// Floyd's Tortoise and Hare
// Create 2 pointers, 1 moves faster and 1 moves slower
// If the race is cycled, 2 pointers will meet each other

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleV2 = function (head) {
  let tortoise = head;
  let hare = head;

  while (hare && hare?.next) {
    hare = hare.next?.next;
    tortoise = tortoise?.next;
    if (hare === tortoise) {
      return true;
    }
  }

  return false;
};
