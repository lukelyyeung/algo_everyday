/**
 * @param  {number} val
 * @param  {ListNode | null} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param  {number[]} list
 * @return {ListNode}
 */
function serializeLinkedList(list) {
  let head;
  let cursor;

  list.forEach((number) => {
    const node = new ListNode(number);

    if (head) {
      cursor.next = node;
      cursor = node;
    } else {
      head = node;
      cursor = head;
    }
  });

  return head;
}

/**
 * @param  {ListNode} head
 * @return {number[]}
 */
function deserializeLinkedList(head) {
  const result = [];

  let cursor = head;

  while(cursor) {
    result.push(cursor.val);
    cursor = cursor.next;
  }

  return result;
}

exports.serializeLinkedList = serializeLinkedList;
exports.deserializeLinkedList = deserializeLinkedList;

