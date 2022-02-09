'''
level averages

Write a function, level_averages, that takes in the root of a binary tree that contains number values. The function should return a list containing the average value of each level.
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

level_averages(a) # -> [ 3, 7.5, 1 ]

test_01:

a = Node(5)
b = Node(11)
c = Node(54)
d = Node(20)
e = Node(15)
f = Node(1)
g = Node(3)

a.left = b
a.right = c
b.left = d
b.right = e
e.left = f
e.right = g

#        5
#     /    \
#    11    54
#  /   \
# 20   15
#      / \
#     1  3

level_averages(a) # -> [ 5, 32.5, 17.5, 2 ]
'''

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None


# BFS
from collections import deque
from statistics import mean

def level_averages(root):
  if root is None:
    return []

  queue = deque([ (root, 0) ])
  levels = []

  while queue:
    node, level_num = queue.popleft()

    if len(levels) == level_num:
      levels.append([ node.val ])
    else:
      levels[level_num].append(node.val)

    if node.left:
      queue.append((node.left, level_num + 1))
    if node.right:
      queue.append((node.right, level_num + 1))

  return [ mean(level) for level in levels ]

def find_average(numsArr):
  return sum(numsArr) / len(numsArr)

# DFS
def level_averages(root):
  levels = []
  averages = []
  _level_averages(root, levels, 0)

  for level in levels:
    averages.append(find_average(level))

  return averages

def _level_averages(root, levels, level_num):
  if root is None:
    return

  if len(levels) == level_num:
    levels.append([ root.val ])
  else:
    levels[level_num].append(root.val)

  _level_averages(root.left, levels, level_num + 1)
  _level_averages(root.right, levels, level_num + 1)

def find_average(numsArr):
  return sum(numsArr) / len(numsArr)
