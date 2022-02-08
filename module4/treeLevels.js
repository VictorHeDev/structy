/*
tree levels

Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.
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

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i']
// ]
*/

/*
APPROACH
- we take in a binary tree and we want to return a 2D array where every subarray represents a level of the binary tree

- in this example we can use a stack to keep track of the nodes and levels
- we want to add in both the current node and the level [ node: 3, level: 0 ]
  - we tack on the level when we do the current.left and current.right operations

*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// DFS recursive
const treeLevels = (root) => {
  const levels = [];
  fillLevels(root, levels, 0);
  return levels;
};

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return;

  if (levels.length === levelNum) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }

  fillLevels(root.left, levels, levelNum + 1);
  fillLevels(root.right, levels, levelNum + 1);
};

// DFS iterative
const treeLevels = (root) => {
  if (root === null) return [];

  let stack = [{ node: root, levelNum: 0 }];
  let levels = [];

  while (stack.length) {
    let { node, levelNum } = stack.pop();
    if (levels.length === levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.right) stack.push({ node: node.right, levelNum: levelNum + 1 });
    if (node.left) stack.push({ node: node.left, levelNum: levelNum + 1 });
  }

  return levels;
};

// BFS
const treeLevels = (root) => {
  if (root === null) return [];

  let queue = [{ node: root, levelNum: 0 }];
  let levels = [];

  while (queue.length) {
    let { node, levelNum } = queue.pop();

    if (levels.length === levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.left) queue.unshift({ node: node.left, levelNum: levelNum + 1 });
    if (node.right) queue.unshift({ node: node.right, levelNum: levelNum + 1 });
  }

  return levels;
};
