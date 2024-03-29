/*
bottom right value

Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.
test_00:

const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1

bottomRightValue(a); // -> 1

test_01:

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \
//    -2  6

bottomRightValue(a); // -> 6
*/

// my approach BFS
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// BFS
const bottomRightValue = (root) => {
  let queue = [root];
  let current = null;

  while (queue.length > 0) {
    current = queue.pop();

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }

  return current.val;
};

/*
APPROACH
- we take in the head of a binary tree and we want to output the deepest right leaf
- go down by levels -> think about using BFS!
- we want to keep adding to the queue and keep track of the "current" that is popped off
- the LAST element to be popped off the queue will be the deepest and most rightmost leaf
*/
