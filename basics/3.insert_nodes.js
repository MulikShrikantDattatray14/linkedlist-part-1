//insert the node with the given value at the given specific positon

//note : if the given position is larger than the size of the linkedlist ,then return the head of the linkedlist ( this edge case is not included in the code below)
class Node {
  constructor(value) {
    this.value = value;
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
  // insert method
  insertNodeAtPosition(value, position) {
    const newNode = new Node(value);
    if(this.head== null) return newNode// imp edge case
    if (position === 0) {
      // Insert at the beginning
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let temp = this.head;
      for (let i = 1; i <= position - 1 && temp.next !== null; i++) {
        temp = temp.next;
      }
      newNode.next = temp.next;
      temp.next = newNode;
    }
  }

  // Helper method to display the linked list
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value + " ");
      current = current.next;
    }
  }
}

// Example Usage:
const linkedList = new LinkedList();

let n = 5;
for (let i = 0; i < n; i++) {
  linkedList.append(i);
}
// Displaying the linked list
linkedList.display();
// Inserting nodes with values 1, 2, 3 at positions 0, 1, 2
linkedList.insertNodeAtPosition(11, 1);
linkedList.insertNodeAtPosition(21, 2);
linkedList.insertNodeAtPosition(31, 3);
console.log("///////////////////////////////////////////////");

// Displaying the linked list
linkedList.display();

///////////////////////////////////////////////////////////////////////////
//scaler code :

function solve(A, B, C) {
  //A- head;
  // B - value
  let n = new Node(B);
  //// WHEN head is null , we have only one node, so return the new nod
  if(A== null) return n;
  if (C <= 0) {
      n.next = A;
      return n;
  }

  let temp = A;
  for (let i = 1; (i <= C - 1) && (temp.next != null); i++) {
      temp = temp.next;
  }
  n.next = temp.next;
  temp.next = n;
  return A;
}
