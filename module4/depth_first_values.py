'''
depth first values

Write a function, depth_first_values, that takes in the root of a binary tree. The function should return a list containing all values of the tree in depth-first order.

Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ
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

depth_first_values(a)
#   -> ['a', 'b', 'd', 'e', 'c', 'f']

test_01:

a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')
g = Node('g')
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.left = g

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f
#    /
#   g

depth_first_values(a)
#   -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
'''

