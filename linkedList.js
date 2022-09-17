class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      let current = this.head;
      while (current.next != null) current = current.next;
      current.next = node;
      this.tail.next = node;
      this.tail = node;
    }
    ++this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
    ++this.size;
  }

  at(index) {
    if (index > this.size) return -1;
    let current = this.head;
    let i = 0;
    while (i < index && current) {
      current = current.next;
      ++i;
    }
    return current.data;
  }

  pop() {
    if (this.head === this.tail) {
      const value = this.head?.data ?? undefined;
      this.head = null;
      this.tail = null;
      return value;
    } else {
      let current = this.head;
      while (current.next !== this.tail) current = current.next;
      const value = this.tail.data;
      this.tail = current;
      return value;
    }
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.data === value) {
        return i;
      }
      current = current.next;
      ++i;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let repr = "";
    while (current) {
      repr += `( ${current.data} ) -> `;
      current = current.next;
    }
    return repr + "null";
  }

  insertAt(value, index) {
    const node = new Node(value);
    if (index === 0) {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
    } else if (index === this.size - 1) {
      const temp = this.tail;
      this.tail = node;
      temp.next = this.tail;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;
      while (current && i < index) {
        prev = current;
        current = current.next;
        ++i;
      }
      prev.next = node;
      node.next = current;
    }
    ++this.size;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let prev = null;
      let i = 0;
      while (current && i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      if (index === this.size - 1) {
        this.tail = prev;
        this.tail.next = null;
        return;
      }
      prev.next = current.next;
    }
    --this.size;
  }
}

module.exports = LinkedList;
