"""
linked list find

Write a function, linked_list_find, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
test_00:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

linkedListFind(a, "c") # True

test_01:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

linkedListFind(a, "d") # True

test_02:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

linkedListFind(a, "q") # False
"""

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# my approach
# iterative
def linked_list_find(head, target):
  current = head

  while current is not None:
    if current.val == target:
      return True
    current = current.next
  return False

# recursive
def linked_list_find(head, target):
  if head is None:
    return False
  if head.val == target:
    return True
  return linked_list_find(head.next, target)