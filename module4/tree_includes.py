'''
tree includes

Write a function, tree_includes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
test_00:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
e = Node("e")
f = Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f

tree_includes(a, "e") # -> True

test_01:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
e = Node("e")
f = Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f
tree_includes(a, "a") # -> True
'''

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None


# BFS
from collections import deque
def tree_includes(root, target):
  if root is None:
    return False

  queue = deque([root])
  while queue:
    current = queue.popleft()
    if current.val == target:
      return True

    if current.left:
      queue.append(current.left)
    if current.right:
      queue.append(current.right)

  return False

# DFS
def tree_includes(root, target):
  if root is None:
    return False
  if root.val == target:
    return True
  return tree_includes(root.left, target) or tree_includes(root.right, target)