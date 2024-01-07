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

    if (this.head==null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next != null) {// reach the end
      temp = temp.next;
    }
    // and finally attach the newnode at end
    temp.next = newNode;
  }

  printList() {
    let temp = this.head;
    while (temp !=null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();

let arr=[21,31,41,51,61,71]
let n= arr.length
for(let i=0;i<n;i++){
    linkedList.append(arr[i]);
}
linkedList.printList();
