'''
tree min value

Write a function, tree_min_value, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
test_00:

a = Node(3)
b = Node(11)
c = Node(4)
d = Node(4)
e = Node(-2)
f = Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#       3
#    /    \
#   11     4
#  / \      \
# 4   -2     1
tree_min_value(a) # -> -2

test_01:

a = Node(5)
b = Node(11)
c = Node(3)
d = Node(4)
e = Node(14)
f = Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#       5
#    /    \
#   11     3
#  / \      \
# 4   14     12

tree_min_value(a) # -> 3
'''

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

# DFS
def tree_min_value(root):
  if root is None:
    return float('inf')
  left_min_value = tree_min_value(root.left)
  right_min_value = tree_min_value(root.right)
  return min(root.val, left_min_value, right_min_value)

# BFS
from collections import deque
def tree_min_value(root):
  queue = deque([root])
  smallest = float('inf')

  while queue:
    current = queue.popleft()
    smallest = min(current.val, smallest)

    if current.left:
      queue.append(current.left)
    if current.right:
      queue.append(current.right)

  return smallest