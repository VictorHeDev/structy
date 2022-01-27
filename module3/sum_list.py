"""
sum list

Write a function, sum_list, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.
test_00:

a = Node(2)
b = Node(8)
c = Node(3)
d = Node(-1)
e = Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

# 2 -> 8 -> 3 -> -1 -> 7

sum_list(a) # 19

test_01:

x = Node(38)
y = Node(4)

x.next = y

# 38 -> 4

sum_list(x) # 42
"""

# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.next = None

# brute force
# iterative
def sum_list(head):
  currNode = head
  sum = 0

  while currNode is not None:
    sum += currNode.val
    currNode = currNode.next

  return sum

def sum_list(head):
  sum = 0
  return sum_list_helper(head, sum)

def sum_list_helper(node, sum):
  if node is None:
    return sum
  sum += node.val
  return sum_list_helper(node.next, sum)