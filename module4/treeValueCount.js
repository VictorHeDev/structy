/*
tree value count

Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.
test_00:

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a,  6); // -> 3

test_01:

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4  6     12

treeValueCount(a,  12); // -> 2
*/

/*
APPROACH RECURSIVE
- if it is a match, we need to +1
- if it is a null node, we need to return 0
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// BFS
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  let counter = 0;
  let queue = [root];

  while (queue.length) {
    current = queue.pop();
    if (current.val === target) counter += 1;

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }

  return counter;
};

// DFS
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  if (root.val === target) {
    return (
      1 + treeValueCount(root.left, target) + treeValueCount(root.right, target)
    );
  } else {
    return (
      0 + treeValueCount(root.left, target) + treeValueCount(root.right, target)
    );
  }
};
