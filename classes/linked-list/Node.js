/**
 * @module Node
 */

/**
 * @template T
 */
export default class Node {
  /**
   * @private
   * @type {T}
   *  */
  data;

  /**
   * @type {Node<T>?}
   */
  prev;

  /**
   * @type {Node<T>?}
   */
  next;

  /**
   * @param {T} data
   * @param {Node<T>?} next
   * @param {Node<T>?} prev
   */
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }

  toString() {
    return this.data.toString();
  }

  toObject() {
    return this.data;
  }
}
