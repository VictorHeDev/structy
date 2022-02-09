/*
level averages

Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.
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

levelAverages(a); // -> [ 3, 7.5, 1 ]

test_01:

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

levelAverages(a); // -> [ 5, 32.5, 17.5, 2 ]

test_02:

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(45);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0     45
//     /       \
//    -1       -2

levelAverages(a); // -> [ -1, -5.5, 14, -1.5 ]
*/

/*
APPROACH
- take in a binary tree and return an array containing the average of the numbers in each level
- variation of the tree levels problem we just did
- 
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// BFS
const levelAverages = (root) => {
  if (root === null) return [];

  let levels = [];
  let averages = [];
  let queue = [{ node: root, levelNum: 0 }];

  while (queue.length) {
    let { node, levelNum } = queue.pop();

    if (levels.length == levelNum) {
      levels.push([node.val]);
    } else {
      levels[levelNum].push(node.val);
    }

    if (node.left) queue.unshift({ node: node.left, levelNum: levelNum + 1 });
    if (node.right) queue.unshift({ node: node.right, levelNum: levelNum + 1 });
  }

  for (let level of levels) {
    averages.push(avg(level));
  }

  return averages;
};

const avg = (array) => {
  let sum = 0;
  for (let num of array) sum += num;
  return sum / array.length;
};

// DFS
const levelAverages = (root) => {
  let levels = [];
  let averages = [];
  fillLevels(root, levels, 0);

  for (let level of levels) {
    averages.push(avg(level));
  }

  return averages;
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

const avg = (array) => {
  let sum = 0;
  for (let num of array) sum += num;
  return sum / array.length;
};
