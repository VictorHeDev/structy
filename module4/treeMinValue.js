/*
tree min value

Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
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

treeMinValue(a); // -> -2

test_01:

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

treeMinValue(a); // -> 3
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

/*
APPROACH
- assume that the tree is not empty

RECURSIVE
- let the return value for null nodes to be Infinity
- that way we can compare the minimum values and return up the tree
- given the smallest value in the left subtree and the smallest value in the right subtree
  and we compare those values with the current node, return the minimum value amongst the tree
*/

// BFS
const treeMinValue = (root) => {
  let resultMin = Infinity;
  let queue = [root];

  while (queue.length) {
    current = queue.pop();
    resultMin = Math.min(current.val, resultMin);

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }

  return resultMin;
};

// DFS recursive
const treeMinValue = (root) => {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
};

// DFS iterative
const treeMinValue = (root) => {
  let smallest = Infinity;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }

  return smallest;
};
