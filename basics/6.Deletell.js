class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function deleteNode(head, value) {
  // value is not the position, but the actaul value
  if (head == null) {
    return null;
  }
  if (head.data === value) {
    return head.next; // return null
  }
  // go till the value, and skip that value and connect the node back of that value_node to node front of the value_node
  let temp = head;
  while (temp.next !== null && temp.next.data !== value) {
    temp = temp.next;
  }
  if (temp.next != null) {
    temp.next = temp.next.next;
  }
  return head;
}

// Example usage:
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log("Original Linked List:");
let current = head;
while (current) {
  console.log(current.data);
  current = current.next;
}

head = deleteNode(head, 2);

console.log("\nLinked List after deleting node with value 2:");
current = head;
while (current) {
  console.log(current.data);
  current = current.next;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// we have find value in ll based on position:
function deleteNode(head, position) {
  if (position === 0) {
    return head.next;
  }
  let temp = head;

  for (curr = 0; curr < position - 1; curr += 1) {
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}
