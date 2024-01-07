
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.revarr=[];
      this.revstr=" "
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
        this.revarr.unshift(current.data)
       this.revstr=current.data +" "+this.revstr
        current = current.next;
      }
      console.log(this.revstr)
      return this.revarr
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
  
  
  // print linkedlist vertically 
  linkedList.printList()
  
  // print linkedlist in array format 
  console.log(linkedList.printList())