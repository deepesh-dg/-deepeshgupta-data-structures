/**
 * @module LinkedList
 */

import Node from "./Node.js";

export default class LinkedList<T> {
  public length = 0;

  private head: Node<T> | null = null;

  private tail: Node<T> | null = null;

  constructor(param1?: LinkedList<T> | Node<T> | T | null) {
    if (!param1) return;

    if (param1 instanceof LinkedList) {
      this.head = param1.head;
      this.tail = param1.tail;
      this.length = param1.length;

      return;
    }

    if (param1 instanceof Node) {
      this.insert(param1.toObject());
      return;
    }

    if (param1 != null) {
      this.insert(param1);
      return;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  /**
   * big'O(1)
   * @param data
   */
  insertFirst(data: T) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.head = new Node(data, this.head);
    }

    ++this.length;
  }

  /**
   * big'O(1)
   * @param data
   */
  insertLast(data: T) {
    if (this.isEmpty()) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      const node = new Node(data);
      this.tail!.next = node;
      this.tail = node;
    }

    ++this.length;
  }

  /**
   * big'O(n)
   * @param index
   * @param data
   */
  insertAt(index: number, data: T) {
    if (index < 0 || index >= this.length) throw new Error("invalid index");

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index === this.length - 1) {
      this.insertLast(data);
      return;
    }

    let trav = this.head;
    let i = 0;

    while (trav) {
      let next = trav.next;

      if (i === index) {
        const newNode = new Node(data, trav.next);
        trav.next = newNode;
        next = newNode;
        ++this.length;
        break;
      }

      trav = next;

      i++;
    }
  }

  /**
   * big'O(1)
   */
  removeFirst() {
    if (this.isEmpty()) throw new Error("List is empty");

    this.head = this.head?.next || null;

    if (this.isEmpty()) this.tail = null;
    --this.length;
  }

  /**
   * big'O(n)
   */
  removeLast() {
    if (this.isEmpty()) throw new Error("List is empty");

    if (this.length === 1) {
      this.removeFirst();
      return;
    }

    let trav = this.head;

    while (trav) {
      let next = trav.next;

      if (next === this.tail) {
        trav.next = null;
        this.tail = trav;
        --this.length;

        break;
      }

      trav = next;
    }
  }

  /**
   * big'O(n)
   * @param index
   */
  removeAt(index: number) {
    if (index < 0 || index >= this.length) throw new Error("invalid index");

    if (index === 0) {
      this.removeFirst();
      return;
    }

    if (index === this.length - 1) {
      this.removeLast();
      return;
    }

    let trav = this.head;
    let i = 0;

    while (trav) {
      let next = trav.next;

      if (i === index) {
        trav.next = next?.next || null;
        --this.length;

        break;
      }

      trav = next;

      i++;
    }
  }

  /**
   * big'O(1)
   * @param  args
   */
  insert(...args: T[]) {
    args.forEach(this.insertLast.bind(this));
  }

  /**
   * big'O(n)
   * @param nodeOrData
   */
  remove(nodeOrData: Node<T> | T) {
    if (this.isEmpty()) throw new Error("List is empty");

    if (this.head === nodeOrData || this.head?.data === nodeOrData) {
      this.head = this.head?.next || null;
      --this.length;

      if (this.isEmpty()) this.tail = null;
      return;
    }

    let prev: Node<T> | null = null;
    let trav = this.head;

    while (trav) {
      if (trav === nodeOrData || nodeOrData === trav.data) {
        if (trav === this.tail && prev) {
          this.tail = prev;
          this.tail.next = null;
          --this.length;

          return;
        }

        prev!.next = trav.next;
        --this.length;
      }

      prev = trav;
      trav = trav.next;
    }
  }

  /**
   * big'O(n)
   * @param nodeOrData
   */
  indexOf(nodeOrData: Node<T> | T) {
    let trav = this.head;
    let i = -1;

    while (trav) {
      i++;
      if (trav === nodeOrData || nodeOrData === trav.data) break;
    }

    return i;
  }

  /**
   * big'O(1)
   */
  getFirst() {
    return this.head;
  }

  /**
   * big'O(1)
   */
  getLast() {
    return this.tail;
  }

  /**
   * big'O(n)
   * @param index
   */
  getAt(index: number) {
    if (index < 0 || index >= this.length) throw new Error("invalid index");

    let i = 0;
    let trav = this.head;

    while (trav) {
      if (i === index) return trav;

      trav = trav.next;
      i++;
    }

    throw new Error("Not found");
  }

  toObject() {
    let trav = this.head;
    const data: T[] = [];

    while (trav) {
      data.push(trav.toObject());
      trav = trav.next;
    }

    return data;
  }
}
