"""
linked list values

Write a function, linked_list_values, that takes in the head of a linked list as an argument. The function should return a list containing all values of the nodes in the linked list.

Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
test_00:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

linked_list_values(a) # -> [ 'a', 'b', 'c', 'd' ]

test_01:

x = Node("x")
y = Node("y")

x.next = y

# x -> y

linked_list_values(x) # -> [ 'x', 'y' ]

test_02:

q = Node("q")

# q

linked_list_values(q) # -> [ 'q' ]
"""

# my approach
# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# iterative
def linked_list_values(head):
  result = [];
  currNode = head

  while currNode is not None:
    result.append(currNode.val)
    currNode = currNode.next
  return result

# recursive
def linked_list_values(head):
  result = []

  linked_list_values_helper(head, result)
  return result

def linked_list_values_helper(node, array):
  if node is None:
    return;
  array.append(node.val)
  linked_list_values_helper(node.next, array)