"""
longest streak

Write a function, longest_streak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
test_00:

a = Node(5)
b = Node(5)
c = Node(7)
d = Node(7)
e = Node(7)
f = Node(6)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

# 5 -> 5 -> 7 -> 7 -> 7 -> 6

longest_streak(a) # 3

test_01:

a = Node(3)
b = Node(3)
c = Node(3)
d = Node(3)
e = Node(9)
f = Node(9)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

# 3 -> 3 -> 3 -> 3 -> 9 -> 9

longest_streak(a) # 4
"""

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

def longest_streak(head):
  currentNode = head
  prevVal = None
  currMax = 0
  maxStreak = 0

  while currentNode is not None:
    if currentNode.val == prevVal:
      currMax += 1
    else:
      currMax = 1
    prevVal = currentNode.val
    maxStreak = max(currMax, maxStreak)
    currentNode = currentNode.next

  return maxStreak