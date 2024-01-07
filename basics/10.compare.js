class ListNode {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  function areLinkedListsIdentical(headA, headB) {
    while (headA !== null && headB !== null) {
      if (headA.data !== headB.data) {
        return false;
      }
      headA = headA.next;
      headB = headB.next;
    }
  
    // Check if both linked lists are of the same length
    return headA === null && headB === null;
  }
  
//   Example usage:
//   Assuming you have two linked lists: listA and listB
//   where listA and listB are instances of ListNode representing the heads of the linked lists
  
  const listA = new ListNode(1, new ListNode(2, new ListNode(3)));
  const listB = new ListNode(1, new ListNode(2, new ListNode(31)));
  
  //Check if the linked lists are identical
  const result = areLinkedListsIdentical(listA, listB);
  console.log(result)
  //If result is true, the linked lists are identical; otherwise, they are not
  