class LRUCache {
  cached = {};
  head = null;
  tail = null;
  size = 0;

  constructor(capacity) {
    this.capacity = capacity;
  }

  /**
   * @param  {String} key
   */
  get(key) {
    const existingNode = this.cached[key];

    if (!existingNode) {
      return -1;
    }

    if (existingNode === this.tail) {
      return existingNode.val.value;
    }

    if (!existingNode.prev) {
      this.head = existingNode.next;
    } else {
      existingNode.prev.next = existingNode.next;
    }

    existingNode.next.prev = existingNode.prev;

    this.tail.next = existingNode;
    existingNode.prev = this.tail;
    this.tail = existingNode;

    return existingNode.val.value;
  }

  put(key, value) {
    // first node
    // create head and tail
    if (!this.head) {
      const newNode = new DoublyLinkedList({ value, key });
      this.head = newNode;
      this.tail = newNode;
      this.cached[key] = newNode;
      this.size++;
      return;
    }

    const existingNode = this.cached[key];

    // new node
    // update tail
    if (!existingNode) {
      const newNode = new DoublyLinkedList({ value, key });
      this.cached[key] = newNode;
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;

      if (this.capacity === this.size) {
        this.cached[this.head.val.key] = undefined;
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.size++;
      }

      return;
    }

    // existing node
    // node === this.tail
    // early return

    // update head to node.next if !node.previous
    // this.tail = node
    // this.tail.next = node, node.prev = this.tail
    // node.prev.next = node.next
    // node.next.prev = node.prev
    existingNode.val = { value, key };

    if (existingNode === this.tail) {
      return;
    }

    if (!existingNode.prev) {
      this.head = existingNode.next;
    } else {
      existingNode.prev.next = existingNode.next;
    }

    existingNode.next.prev = existingNode.prev;

    this.tail.next = existingNode;
    existingNode.prev = this.tail;
    this.tail = existingNode;
  }
}

class DoublyLinkedList {
  constructor(val, prev, next) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

const lruCache = new LRUCache(2);

lruCache.put(1, 1);
// console.log(lruCache);
lruCache.put(2, 2);
lruCache.put(3, 3);
// console.log(lruCache);
// lruCache.put(3, 3);
console.log(lruCache.get(3));

console.log(lruCache);
// lruCache.put(3, 3);
// console.log(lruCache);
