class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  pushFront(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  pushBack(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  popFront() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;
    return value;
  }
  popBack() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
    return value;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}
const deque = new Queue();
const arr = [];
let i;

let newtime = new Date();
for (i = 0; i < 400000; i++) deque.pushFront("6986582");
console.log(`链表模拟双端数组   头部插入${i}组数据：` + (new Date() - newtime));
newtime = new Date();
for (i = 0; i < 400000; i++) arr.unshift("6986582");
console.log(`js原生数组  头部插入${i}组数据：` + (new Date() - newtime));
