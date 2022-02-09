'''
tree levels

Write a function, tree_levels, that takes in the root of a binary tree. The function should return a 2-Dimensional list where each sublist represents a level of the tree.
test_00:

a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')

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

tree_levels(a) # ->
# [
#   ['a'],
#   ['b', 'c'],
#   ['d', 'e', 'f']
# ]

test_01:

a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')
g = Node('g')
h = Node('h')
i = Node('i')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.left = g
e.right = h
f.left = i

#         a
#      /    \
#     b      c
#   /  \      \
#  d    e      f
#      / \    /
#     g  h   i

tree_levels(a) # ->
# [
#   ['a'],
#   ['b', 'c'],
#   ['d', 'e', 'f'],
#   ['g', 'h', 'i']
# ]
'''

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

# DFS iterative
def tree_levels(root):
  if root is None:
    return []

  levels = []
  stack = [(root, 0)]

  while stack:
    node, level_num = stack.pop()

    if len(levels) == level_num:
      levels.append([ node.val ])
    else:
      levels[level_num].append(node.val)

    if node.right:
      stack.append((node.right, level_num + 1))
    if node.left:
      stack.append((node.left, level_num + 1))

  return levels

# DFS recursive
def tree_levels(root):
  levels = []
  _tree_levels(root, levels, 0)
  return levels

def _tree_levels(root, levels, level_num):
  if root is None:
    return;

  if len(levels) == level_num:
    levels.append([ root.val ])
  else:
    levels[level_num].append(root.val)

  _tree_levels(root.left, levels, level_num + 1)
  _tree_levels(root.right, levels, level_num + 1)

# BFS
from collections import deque

def tree_levels(root):
  if root is None:
    return []

  levels = []
  queue = deque([ (root, 0) ])

  while queue:
    node, level_num = queue.popleft()

    if len(levels) == level_num:
      levels.append([node.val])
    else:
      levels[level_num].append(node.val)

    if node.left:
      queue.append((node.left, level_num + 1))
    if node.right:
      queue.append((node.right, level_num + 1))

  return levels
