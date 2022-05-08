function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head?.next) {
    return head;
  }

  const stack = [];
  let cursor = head;

  while (cursor) {
    stack.push(cursor);
    cursor = cursor.next;
  }

  const reversedHead = stack.pop();
  cursor = reversedHead;

  while (stack.length) {
    const node = stack.pop();
    node.next = null;
    cursor.next = node;
    cursor = cursor.next;
  }

  return reversedHead;
};


// Magical recursion
// After find the end
// swap the position
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseListV2(head) {
  if (head?.next) {
    return head;
  }

  const reversed = reverseListV2(head.next);
  // when head is 3
  // nothing

  // when head is 2
  // 1,2,3 -> 1,2,3,2 -> 1,2 3,2

  // when head is 1
  // 1,2 3,2 -> 3,2,1 1
  // swap arrow
  head.next.next = head;
  head.next = null;

  return reversed;
}