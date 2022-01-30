"""
is univalue list

Write a function, is_univalue_list, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.
test_00:

a = Node(7)
b = Node(7)
c = Node(7)

a.next = b
b.next = c

# 7 -> 7 -> 7

is_univalue_list(a) # True

test_01:

a = Node(7)
b = Node(7)
c = Node(4)

a.next = b
b.next = c

# 7 -> 7 -> 4

is_univalue_list(a) # False
"""

# my approach
# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# iterative
def is_univalue_list(head):
  current = head
  while current is not None:
    if current.val != head.val:
      return False
    current = current.next
  return True

# recursive
def is_univalue_list(head):
  prevVal = head.val
  return is_univalue_list_helper(head, prevVal)

def is_univalue_list_helper(head, prevVal):
  if head is None:
    return True
  if head.val != prevVal:
    return False
  return is_univalue_list_helper(head.next, prevVal)

# recursive solution
def is_univalue_list(head, prev_val = None):
  if head is None:
    return True
  if prev_val is not None and head.val != prev_val:
    return False
  return is_univalue_list(head.next, head.val)