/*
linked list values

Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

test_01:

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]

test_02:

const q = new Node("q");

// q

linkedListValues(q); // -> [ 'q' ]
*/

// brute force
// my iterative
// intput: head of LL
// output: array with all values of LL
// iterate thru LL and push values into array as long as currNode is not None

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
  let result = [];
  let currNode = head;

  while (currNode !== null) {
    result.push(currNode.val);
    currNode = currNode.next;
  }
  return result;
};

// my recursive
const linkedListValues = (head) => {
  let result = [];

  linkedListHelper(head, result);
  return result;
};

const linkedListHelper = (node, array) => {
  if (node === null) return;
  array.push(node.val);
  linkedListHelper(node.next, array);
};