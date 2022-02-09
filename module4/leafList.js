/*
leaf list

Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

leafList(a); // -> [ 'd', 'e', 'f' ]

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

leafList(a); // -> [ 'd', 'g', 'h' ]

test_02:

const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

leafList(a); // -> [ 20, 1, 3, 54 ]
*/

/*
APPROACH
- use a DFS approach to traverse as keep as possible
- when we reach a leaf node, add it to the node value to the leaves array
- return the leaves array
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// DFS recursive
const leafList = (root) => {
  let leaves = [];
  leafListHelper(root, leaves);
  return leaves;
};

const leafListHelper = (node, leaves) => {
  if (node === null) return;
  if (node.left === null && node.right === null) leaves.push(node.val);
  leafListHelper(node.left, leaves);
  leafListHelper(node.right, leaves);
};

// DFS iterative
const leafList = (root) => {
  if (root === null) return [];
  let stack = [root];
  let leaves = [];

  while (stack.length) {
    let current = stack.pop();
    if (current.left === null && current.right === null)
      leaves.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return leaves;
};
