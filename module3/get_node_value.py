"""
get node value

Write a function, get_node_value, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return None.
test_00:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

get_node_value(a, 2) # 'c'

test_01:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

get_node_value(a, 3) # 'd'
"""

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# my approach
# iterative
def get_node_value(head, index):
  current = head
  for i in range(index):
    if current is None:
      return None
    current = current.next
  return current.val

# recursive
def get_node_value(head, index):
  if head is None:
    return None
  if index == 0:
    return head.val
  return get_node_value(head.next, index-1)