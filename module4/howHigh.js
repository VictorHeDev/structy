/*
how high

Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.
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

howHigh(a); // -> 2

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
e.left = g

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

howHigh(a); // -> 3
*/

/*
APPROACH
- we want to take in the root of a binary tree and output the height
- the height of a tree is the number of edges from the root to the farthest leaf
- if we have a single node, the height is 0
- if we have an empty node, the height is -1
  - THIS WILL BE THE BASE CASE ^
- when we move up and compare, we want to take the max and add a +1
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// BFS
const howHigh = (node) => {
  if (node === null) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};
