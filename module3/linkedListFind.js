/*
linked list find

Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "c"); // true

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "d"); // true

test_02:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListFind(a, "q"); // false
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// my approach
// iterative
const linkedListFind = (head, target) => {
  current = head;

  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }

  return false;
};

// recursive
const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};
