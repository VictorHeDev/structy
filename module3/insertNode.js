/*
insert node

Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'v', 3);
// a -> b -> c -> v -> d

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// my approach
// iterative
const insertNode = (head, value, index) => {
  let current = head;
  let prev = null;
  let insertionNode = new Node(value);

  if (index === 0) {
    insertionNode.next = head;
    return insertionNode;
  }

  for (let i = 0; i <= index; i++) {
    if (i === index) {
      prev.next = insertionNode;
      insertionNode.next = current;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return head;
};


/*
GENERAL APPROACH
- set a count variable at the head
- traverse through the LL
- when count is 1 less than target index, we can do our insertion
- set previous.next to the new insertionNode
- set new insertionNode.next to current
*/

// iterative
const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  let count = 0;
  let current = head;

  while (current !== null) {
    if (count === index - 1) {
      const temp = current.next;
      current.next = new Node(value);
      current.next.next = temp;
    }

    count += 1;
    current = current.next;
  }

  return head;
};

// recursive
const insertNode = (head, value, index, count = 0) => {
  if (head === null) return null;

  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  if (count === index - 1) {
    let temp = head.next;
    head.next = new Node(value);
    head.next.next = temp;
    return head;
  }

  insertNode(head.next, value, index, count + 1);
  return head;
};