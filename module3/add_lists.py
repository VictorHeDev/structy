'''
add lists

Write a function, add_lists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

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

#   621
# + 354
# -----
#   975

a1 = Node(1)
a2 = Node(2)
a3 = Node(6)
a1.next = a2
a2.next = a3
# 1 -> 2 -> 6

b1 = Node(4)
b2 = Node(5)
b3 = Node(3)
b1.next = b2
b2.next = b3
# 4 -> 5 -> 3

add_lists(a1, b1)
# 5 -> 7 -> 9
'''

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# recursive
def add_lists(head_1, head_2, carry=0):
  if head_1 is None and head_1 is None and carry == 0:
    return None
  val_1 = head_1.val if head_1 is not None else 0
  val_2 = head_2.val if head_2 is not None else 0

  sum = val_1 + val_2 + carry
  nextCarry = 1 if sum > 9 else 0
  digit = sum % 10

  resultNode = Node(digit)

  next_1 = None if head_1 is None else head_1.next
  next_2 = None if head_2 is None else head_2.next
  resultNode.next = add_lists(next_1, next_2, nextCarry)

  return resultNode

# iterative
def add_lists(head_1, head_2):
  dummyHead = Node(None)
  tail = dummyHead
  carry = 0
  current_1 = head_1
  current_2 = head_2

  while current_1 is not None or current_2 is not None or carry == 1:
    val_1 = 0 if current_1 is None else current_1.val
    val_2 = 0 if current_2 is None else current_2.val

    sum = val_1 + val_2 + carry
    carry = 1 if sum > 9 else 0
    digit = sum % 10

    current_1 = None if current_1 is None else current_1.next
    current_2 = None if current_2 is None else current_2.next

    tail.next = Node(digit)
    tail = tail.next

  return dummyHead.next