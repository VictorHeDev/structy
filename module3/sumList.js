/*
sum list

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
test_00:

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19

test_01:

const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

sumList(x); // 42
*/

// brute force approach
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// iterative
const sumList = (head) => {
  let sum = 0;
  let currNode = head;

  while (currNode !== null) {
    sum += currNode.val;
    currNode = currNode.next;
  }

  return sum;
};

// recursive
const sumList = (head) => {
  // let sum = 0;
  // sum = sumListHelper(head, sum);
  // return sum;
  return sumListHelper(head, 0)
}

const sumListHelper = (node, sum) => {
  if (node === null) return sum;
  sum += node.val;
  return sumListHelper(node.next, sum)
}

// solution
const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};