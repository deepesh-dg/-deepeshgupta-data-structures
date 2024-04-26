/**
 * @module LinkedList
 */

import Node from "./Node.js";

/**
 * @template T
 */
export default class LinkedList {
  /**
   * @public
   * @type {number}
   */
  length = 0;

  /**
   * @private
   * @type {Node<T>?}
   */
  head;

  /**
   * @private
   * @type {Node<T>?}
   */
  tail;

  /**
   *
   * @param {LinkedList<T> | T?} param1
   */
  constructor(param1) {
    if (!param1) return;

    if (param1 instanceof LinkedList) {
      this.head = param1.head;
      this.tail = param1.tail;
      this.length = param1.length;

      return;
    }

    if (param1 != null) {
      this.add(param1);
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  /**
   * big'O(1)
   * @param {T} data
   */
  addFirst(data) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.tail - this.head;
    } else {
      this.head = new Node(data, this.head);
    }

    ++this.length;
  }

  /**
   * big'O(1)
   * @param {T} data
   */
  addLast(data) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      const node = new Node(data);
      this.tail.next = node;
      this.tail = node;
    }

    ++this.length;
  }

  /**
   * big'O(n)
   * @param {number} index
   * @param {T} data
   */
  addAtIndex(index, data) {
    if (index < 0 || index > this.length) throw new Error("invalid index");

    if (index === 0) {
      this.addFirst(data);
      return;
    }

    if (index === this.length - 1) {
      this.addLast(data);
      return;
    }

    let prevNode = this.head;

    for (let i = 1; i < this.length; i++) {
      let currNode = prevNode.next;

      if (i === index && currNode) {
        const newNode = new Node(data, currNode);
        prevNode.next = newNode;
        currNode = newNode;
        ++this.length;
        break;
      }

      prevNode = currNode;
    }
  }

  /**
   * big'O(1)
   */
  removeFirst() {
    if (this.isEmpty()) throw new Error("List is empty");

    this.head = this.head?.next;
    --this.length;
  }

  /**
   * big'O(n)
   */
  removeLast() {
    if (this.isEmpty()) throw new Error("List is empty");

    let prevNode = this.head;

    for (let i = 1; i < this.length; i++) {
      let currNode = prevNode.next;

      if (i === this.length - 2) {
        currNode.next = null;
        this.tail = currNode;
        --this.length;
        break;
      }

      prevNode = currNode;
    }
  }

  /**
   * big'O(n)
   * @param {number} index
   */
  removeAt(index) {
    if (index < 0 || index > this.length) throw new Error("invalid index");

    if (index === 0) {
      this.removeFirst();
      return;
    }

    if (index === this.length - 1) {
      this.removeLast();
      return;
    }

    let prevNode = this.head;

    for (let i = 1; i < this.length; i++) {
      let currNode = prevNode.next;

      if (i === index) {
        prevNode.next = currNode.next;
        --this.length;
        break;
      }

      prevNode = currNode;
    }
  }

  /**
   * big'O(1)
   * @param  {...T} args
   */
  add(...args) {
    args.forEach(this.addLast.bind(this));
  }

  toObject() {
    let trav = this.head;
    const data = [];

    while (trav) {
      data.push(trav.toObject());
      trav = trav.next;
    }

    return data;
  }
}
