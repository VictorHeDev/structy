/*
create linked list

Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.
test_00:

createLinkedList(["h", "e", "y"]);
// h -> e -> y

test_01:

createLinkedList([1, 7, 1, 8]);
// 1 -> 7 -> 1 -> 8
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// my approach
// iterative
const createLinkedList = (values) => {
  if (!values.length) return null;

  let dummyHead = new Node(null);
  let prev = null;
  for (let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i]);

    if (i === 0) {
      dummyHead.next = newNode;
      prev = newNode;
    } else {
      prev.next = newNode;
      prev = newNode;
    }
  }

  return dummyHead.next;
};

/*
APPROACH - Iterative with a dummyHead
- first create the dummyHead and have a pointer called tail point to it
- have a current pointer to iterate through the array
- create a new node using the current
- we have access to tail and tail.next
- set tail.next = new node, then tail = tail
- progress current
- do this until we finish the array
- after we completed the LL, return dummyHead.next
*/