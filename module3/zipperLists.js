/*
zipper lists

Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
test_00:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z

test_01:

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// my iterative approach
const zipperLists = (head1, head2) => {
  let genesis = new Node(0);
  genesis.next = head1;

  let prevB = null;
  let currentA = head1;
  let currentB = head2;
  while (currentA !== null && currentB !== null) {
    let nextA = currentA.next;
    let nextB = currentB.next;

    currentA.next = currentB;
    prevB = currentB;
    currentB.next = nextA;
    currentA = nextA;
    currentB = nextB;
  }

  if (currentA === null) prevB.next = currentB;
  return genesis.next;
};

/*
APPROACH
1. start with first node in LL1
2. we can't make any assumptions about the LLs. One can be longer than the other
3. we need to alternate the nodes in each LL
4. if a LL runs out, we need to append the rest of the other LL
5. use a counter and see if the counter is even or odd
6. add the perspective new node based on the counter
*/
const zipperLists = (head1, head2) => {
  let counter = 0;
  let currentA = head1.next;
  let currentB = head2;
  let tail = head1;

  while (currentA !== null && currentB !== null) {
    if (counter % 2 === 0) {
      tail.next = currentB;
      currentB = currentB.next;
    } else {
      tail.next = currentA;
      currentA = currentA.next;
    }
    counter += 1;
    tail = tail.next;
  }

  if (currentA !== null) tail.next = currentA;
  if (currentB !== null) tail.next = currentB;

  return head1;
};

// recursive solution
const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);

  return head1;
};
