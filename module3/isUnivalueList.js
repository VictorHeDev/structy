/*
is univalue list

Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
test_00:

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true

test_01:

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

isUnivalueList(a); // false
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// my approach
// iterative
const isUnivalueList = (head) => {
  let current = head;

  while (current.next !== null) {
    if (current.val !== current.next.val) return false;
    current = current.next;
  }
  return true;
};

// recursive
const isUnivalueList = (head) => {
  if (head.next === null) return true;
  if (head.val !== head.next.val) return false;
  return isUnivalueList(head.next);
};

/*
APPROACH
- iterate through LL and check if current.val === head.val
- increment current = current.next
*/

const isUnivalueList = (head) => {
  let current = head;
  while (current !== null) {
    if (current.val !== head.val) {
      return false;
    }
    current = current.next;
  }
  return true;
};

