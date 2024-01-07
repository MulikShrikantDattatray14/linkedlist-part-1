//Q2. Certainly! If you have a linked list and only the head is given, you can calculate the size (number of nodes) of the linked list by traversing through it. Here's a simple JavaScript code for that:

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.arr=[]
  }

  // Function to add a new node to the linked list
  addNode(data) {
    const newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Function to calculate the size of the linked list
  calculateSize() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  //printlinkedlist
  printList() {
    let current = this.head;
    while (current) {
      this.arr.push(current.data)
      console.log(current.data);
      current = current.next;
    }
    return this.arr
  }
}

// Example Usage:
const linkedList = new LinkedList();
linkedList.addNode(3);
linkedList.addNode(7);
linkedList.addNode(10);
linkedList.addNode(3);
linkedList.addNode(7);
linkedList.addNode(10);

const size = linkedList.calculateSize();
console.log("Size of the linked list:", size);

// print linkedlist vertically 
linkedList.printList()

// print linkedlist in array format 
console.log(linkedList.printList())
