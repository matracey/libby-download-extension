/**
 * Represents a node in a doubly linked list.
 *
 * @template T - The type of the data stored in the node.
 */
class ListNode<T> {
  /**
   * The next node in the list.
   */
  next: ListNode<T> | null = null;

  /**
   * The previous node in the list.
   */
  prev: ListNode<T> | null = null;

  /**
   * The data stored in the node.
   */
  data: T | null;

  /**
   * Creates an instance of ListNode.
   *
   * @param data - The data to store in the node.
   */
  constructor(data: T | null) {
    this.data = data;
  }

  /**
   * Inserts the current node between two nodes.
   *
   * @param prev - The previous node.
   * @param next - The next node.
   */
  insert(prev: ListNode<T>, next: ListNode<T>) {
    prev.next = this;
    this.prev = prev;
    this.next = next;
    next.prev = this;
  }

  /**
   * Removes the current node from the list.
   */
  remove() {
    if (this.prev) {
      this.prev.next = this.next;
    }
    if (this.next) {
      this.next.prev = this.prev;
    }

    this.prev = null;
    this.next = null;
  }
}

/**
 * A generic Queue implementation using a doubly linked list.
 *
 * @template T - The type of elements held in the queue.
 */
export class Queue<T> {
  /**
   * A dummy node at the front of the queue.
   */
  private readonly _head: ListNode<T>;
  /**
   * A dummy node at the end of the queue.
   */
  private readonly _tail: ListNode<T>;
  /**
   * The number of elements in the queue.
   */
  private _size: number = 0;

  /**
   * Creates an instance of Queue.
   */
  constructor() {
    this._head = new ListNode<T>(null);
    this._tail = new ListNode<T>(null);
    this._head.next = this._tail;
    this._tail.prev = this._head;
  }

  /**
   * Gets the number of elements in the queue.
   *
   * @returns {number} The size of the queue.
   */

  get size(): number {
    return this._size;
  }

  /**
   * Gets the element at the front of the queue without removing it.
   *
   * @returns {T | null} The element at the front of the queue, or null if the queue is empty.
   */
  get peek(): T | null {
    return this._head.next?.data ?? null;
  }

  /**
   * Returns an iterator that yields each element in the queue in FIFO order.
   */
  [Symbol.iterator](): Iterator<T> {
    let curr: ListNode<T> | null = this._head;

    return {
      next: (): IteratorResult<T> => {
        curr = curr?.next ?? null;
        return {
          done: curr === this._tail || curr == null,
          value: curr?.data as T,
        };
      },
    };
  }

  /**
   * Adds an element to the end of the queue.
   *
   * @param data - The element to add to the queue.
   * @returns The node containing the added element.
   */
  enqueue(data: T): ListNode<T> {
    const node = new ListNode(data);
    node.insert(this._tail.prev ?? this._head, this._tail);
    this._size += 1;
    return node;
  }

  /**
   * Removes and returns the element at the front of the queue.
   *
   * @returns {T | null} The element at the front of the queue, or null if the queue is empty.
   */
  dequeue(): T | null {
    if (this._head.next == null || this._head.next == this._tail) {
      return null;
    }

    const node = this._head.next;
    node.remove();
    this._size -= 1;
    return node.data;
  }

  /**
   * Creates a new Queue from an array of data. The entries are enqueued in the order they appear in the array.
   *
   * @param array The array of elements to data.
   */
  static fromArray<T>(array: Array<T>): Queue<T> {
    const q = new Queue<T>();
    for (const data of array) {
      q.enqueue(data);
    }
    return q;
  }
}
