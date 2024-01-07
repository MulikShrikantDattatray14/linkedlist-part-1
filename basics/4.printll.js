//Q4.print LL in space seperated manner
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.arr=[];
      this.str="";
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
  
    //printlinkedlist
    printList() {
      let current = this.head;
      while (current) {
        this.str=this.str+ current.data+" ";
        this.arr.push(current.data)
        console.log(current.data);
        current = current.next;
      }
      console.log(this.str)
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

  console.log("print vertically")
  // print linkedlist vertically 
  linkedList.printList()
  
  console.log("/////////////////////////////////////////////////////////")
  console.log("print in array manner ")
  // print linkedlist in array format 
  console.log(linkedList.printList())