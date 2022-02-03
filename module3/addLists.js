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
