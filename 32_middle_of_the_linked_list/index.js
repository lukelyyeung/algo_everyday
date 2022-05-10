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
var middleNode = function (head) {
  if (!head.next) {
    return head;
  }

  let middle;

  function getListLastIndex(node, index) {
    if (!node.next) {
      if (index === Math.ceil(lastIndex / 2)) {
        middle = node;
      }
      return index;
    }

    const lastIndex = getListLastIndex(node.next, index + 1);
    if (index === Math.ceil(lastIndex / 2)) {
      middle = node;
    }

    return lastIndex;
  }

  getListLastIndex(head, 0);

  return middle;
};

console.log(middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));
