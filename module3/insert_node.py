'''
insert node

Write a function, insert_node, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
test_00:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

insert_node(a, 'x', 2)
# a -> b -> x -> c -> d

test_01:

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

insert_node(a, 'v', 3)
# a -> b -> c -> v -> d
'''

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# my approach
# iterative
def insert_node(head, value, index):
  insertionNode = Node(value)
  count = 0
  current = head

  if index == 0:
    insertionNode.next = head
    return insertionNode

  while current is not None:
    if count == index - 1:
      tmp = current.next
      current.next = insertionNode
      insertionNode.next = tmp

    current = current.next
    count += 1

  return head

# recursive
def insert_node(head, value, index, count=0):
  if head is None:
    return None
  if index == 0:
    newHead = Node(value)
    newHead.next = head
    return newHead
  if count == index - 1:
    temp = head.next
    head.next = Node(value)
    head.next.next = temp
    return head

  insert_node(head.next, value, index, count+1)
  return head
