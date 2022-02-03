/*
depth first values

Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
test_00:

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

test_01:

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// my recursive approach
const depthFirstValues = (root, arr = []) => {
  if (root === null) return [];
  arr.push(root.val);
  if (root.left) depthFirstValues(root.left, arr);
  if (root.right) depthFirstValues(root.right, arr);
  return arr;
};

// my iterative approach
const depthFirstValues = (root) => {
  if (root === null) return [];
  let stack = [root];
  let result = [];

  while (stack.length) {
    candidate = stack.pop();
    result.push(candidate.val);

    if (candidate.right) stack.push(candidate.right);
    if (candidate.left) stack.push(candidate.left);
  }

  return result;
};
