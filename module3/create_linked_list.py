'''
create linked list

Write a function, create_linked_list, that takes in a list of values as an argument. The function should create a linked list containing each item of the list as the values of the nodes. The function should return the head of the linked list.
test_00:

create_linked_list(["h", "e", "y"])
# h -> e -> y

test_01:

create_linked_list([1, 7, 1, 8])
# 1 -> 7 -> 1 -> 8
'''

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# iterative
def create_linked_list(values):
  dummyHead = Node(None)
  tail = dummyHead

  for ele in values:
    newNode = Node(ele)
    tail.next = newNode
    tail = tail.next

  return dummyHead.next

# recursive
def create_linked_list(values, index=0):
  if index == len(values):
    return None
  head = Node(values[index])
  head.next = create_linked_list(values, index+1)
  return head
