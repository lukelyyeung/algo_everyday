const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

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
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  const minPriorityQueue = new MinPriorityQueue({ priority: (node) => node.value });

  lists.forEach((list, index) => {
    if (list) {
      minPriorityQueue.enqueue({ index, value: list.val });
    }
  });

  let head;
  let tail;

  while (minPriorityQueue.size()) {
    const node = minPriorityQueue.dequeue();
    const index = node.element.index;

    if (!tail) {
      head = lists[index];
      tail = lists[index];
    } else {
      tail.next = lists[index];
      tail = lists[index];

      if (!head.next) {
        head.next = tail;
      }
    }

    lists[index] = tail?.next;

    if (tail?.next) {
      minPriorityQueue.enqueue({ index, value: tail.next.val });
    }
  }

  return head ?? null;
}
