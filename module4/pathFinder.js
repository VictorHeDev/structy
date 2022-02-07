/*
tree path finder

Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.
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

pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]

test_01:

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

pathFinder(a, 'p'); // -> null

test_02:

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

pathFinder(a, "c"); // -> ['a', 'c']
*/

/*
APPROACH
- we want to return an array with all the stops starting from the root to the target
- affirmative base case: we find what we are looking for so we want to return an array with only that element value
- if we don't find what we're looking for, (null node) let's return null
- if we grab what we are looking for, when we go up a level in the tree we need to put that new element
  in the return array (add that to the front)
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// DFS O(n^2) time, O(n) space
const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  if (leftPath !== null) return [root.val, ...leftPath];

  const rightPath = pathFinder(root.right, target);
  if (rightPath !== null) return [root.val, ...rightPath];

  return null;
};

// DFS with push
const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  if (result === null) {
    return null;
  }

  return result.reverse();
};

const pathFinderHelper = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinderHelper(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }

  const rightPath = pathFinderHelper(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }

  return null;
};
