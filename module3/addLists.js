/*
add lists

Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9

test_00:

//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
*/

/*
APPROACH
- take in 2 LL as inputs
- take in reversed number LL and return a reversed LL representing the sum
1. If the lengths of both LL are the same:
- traverse like we usually do and make new nodes
- connect previous node to current node
2. If the lengths of LLs are different
- when one LL runs out of nodes, treat it as though the null node's value is 0
3. If we need to handle a carry
- Bring a one digit over to the next calculation
4. What if we need to handle a final carry?
- need one final check for if we hit the ends of the LLs and we sum our carry
*/

// recursive solution
const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;
  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;

  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;

  const resultNode = new Node(digit);

  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;

  resultNode.next = addLists(next1, next2, nextCarry);
  return resultNode;
};

// iterative solution
const addLists = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let carry = 0;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null || current2 !== null || carry === 1) {
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;

    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;
    tail.next = new Node(digit);
    tail = tail.next;
  }

  return dummyHead.next;
};
