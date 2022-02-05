/*
tree sum

Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.
test_00:

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
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
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21

test_01:

const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

treeSum(a); // -> 10
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// recursive DFS
const treeSum = (root) => {
  if (root === null) return 0;
  let leftSum = treeSum(root.left);
  let rightSum = treeSum(root.right);
  return root.val + leftSum + rightSum;
};

// iterative DFS
const treeSum = (root) => {
  if (root === null) return 0;
  let stack = [root];
  let sum = 0;

  while (stack.length) {
    current = stack.pop();
    sum += current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
};

// iterative BFS
const treeSum = (root) => {
  if (root === null) return 0;
  let queue = [root];
  let sum = 0;

  while (queue.length) {
    current = queue.pop();
    sum += current.val;

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }

  return sum;
};
