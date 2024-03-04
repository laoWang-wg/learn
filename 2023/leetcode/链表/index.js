export class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class NodeList {
  constructor() {
    this.head = new Node();
    this.size = 0;
  }
  getList() {
    return this.head.next;
  }
  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let cur = this.head;
    for (let i = 0; i <= index; i++) {
      cur = cur.next;
    }
    return cur.val;
  }
  addAtHead(val) {
    this.addAtIndex(0, val);
  }
  addAtTail() {
    this.addAtIndex(this.size, val);
  }
  addAtIndex(index, val) {
    if (index > this.size) return;
    index = Math.max(0, index);
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    let node = new Node(val);
    node.next = cur.next;
    cur.next = node;
    this.size++;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    this.size--;
    cur.next = cur.next.next;
  }
}
