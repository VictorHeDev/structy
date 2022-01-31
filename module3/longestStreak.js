/*
longest streak

Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
test_00:

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3

test_01:

const a = new Node(3);
const b = new Node(3);
const c = new Node(3);
const d = new Node(3);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

longestStreak(a); // 4
*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  let prev = head;
  let current = head;
  let maximum = 0;
  let currMax = 0;

  while (current !== null) {
    if (current.val === prev.val) {
      currMax += 1;
    } else {
      maximum = Math.max(currMax, maximum);
      currMax = 1;
      prev = current;
    }
    current = current.next;
  }
  maximum = Math.max(currMax, maximum);

  return maximum;
};
