class ListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function findBthElement(head, B) {
    let current = head;
    for (let i = 1; current != null && i < B; i++) {
      current = current.next;
    }
    return current ? current.value : null;
  }
  
  // Example usage:
 // Example usage:
let head = new ListNode(11);
head.next = new ListNode(12);
head.next.next = new ListNode(13);
  const B = 3;
  
  const result = findBthElement(head, B);
  
  console.log(result !== null ? `The ${B}-th element is: ${result}` : `The linked list is too short. Unable to find the ${B}-th element.`);
  