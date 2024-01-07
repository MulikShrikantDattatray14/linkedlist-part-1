// create a linkedlist when no of nodes is given
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
    while (temp.next != null) {
      // reach the end
      temp = temp.next;
    }
    // and finally attach the newnode at end
    temp.next = newNode;
  }
  isNonDecreasing() {
    // Edge case: empty list or single node
    if (!this.head || !this.head.next) {
      return true;
    }
    for (
      let current = this.head;
      current.next !== null;
      current = current.next
    ) {
      // Compare current node's data with the next node's data
      if (current.data > current.next.data) {
        return false;
      }
    }
    // If we reach here, the list is non-decreasing
    return true;
  }

  printList() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
let n = 5;
for (let i = 0; i < n; i++) {
  linkedList.append(i);
}
linkedList.append(6);
linkedList.append(9);
linkedList.append(79);
linkedList.printList();
console.log(linkedList.isNonDecreasing());
