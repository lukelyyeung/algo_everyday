/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;

  return this;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list1Node = list1;
  let list2Node = list2;
  let firstNode;

  if ((list2Node?.val ?? Number.POSITIVE_INFINITY) > (list1Node?.val ?? Number.POSITIVE_INFINITY)) {
    firstNode = list1;
    list1Node = list1?.next;
  } else {
    firstNode = list2;
    list2Node = list2?.next;
  }

  let lastNode = firstNode;

  while (list1Node || list2Node) {
    if ((list2Node?.val ?? Number.POSITIVE_INFINITY) > (list1Node?.val ?? Number.POSITIVE_INFINITY)) {
      lastNode.next = list1Node;
      list1Node = list1Node.next;
    } else {
      lastNode.next = list2Node;
      list2Node = list2Node.next;
    }

    lastNode = lastNode.next;
    lastNode.next = null;
  }

  return firstNode;
};
