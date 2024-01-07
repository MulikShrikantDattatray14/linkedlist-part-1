class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  search(data) {
    let temp = this.head;
    while (temp != null) {
      if (temp.data === data) {
        return true;
      }
      temp = temp.next;
    }

    return false;
  }
}

// Example usage:
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

console.log("Search for 2:", linkedList.search(2)); // true
console.log("Search for 4:", linkedList.search(4)); // false
