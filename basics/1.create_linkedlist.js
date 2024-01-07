 //LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array. 

 //Example 1: In the below code example, we define a class Node having two properties: element and next. Element holds the data of a node while next holds the pointer to the next node, which is initialized to the null value. 

 // User defined class node
//class Node {
	// constructor
	//constructor(element)
	//{
	//	this.element = element;
	//	this.next = null
	//}
//}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function constructLL(arr) {
    // 'n' be the size of the array 'arr'
    let n = arr.length;

    // 'head' variable stores the head of the
    // linked list
    let head = new Node(arr[0]);
    let temp = head;

    for(let i = 1; i < n; ++i) {
        // Attach current node to the "next"
        // of the previous node
        let curNode = new Node(arr[i]);
        temp.next = curNode;
        temp = temp.next;
    }

    return head;
}

// Example usage:
let arr = [1, 2, 3, 4, 5,6,7,8,9];
let linkedList = constructLL(arr);
console.log(linkedList);

let size=0;
let temp = linkedList
while (temp !=null) {
	size++;
  console.log(temp.data);
  temp = temp.next;
}
console.log("size : " + size)