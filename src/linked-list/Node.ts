/**
 * @module Node
 */

export default class Node<T> {
  constructor(
    private _data: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}

  get data() {
    return this._data;
  }

  toObject() {
    return this.data;
  }
}
