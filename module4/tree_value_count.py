'''
tree value count

Write a function, tree_value_count, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.
test_00:

a = Node(12)
b = Node(6)
c = Node(6)
d = Node(4)
e = Node(6)
f = Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#      12
#    /   \
#   6     6
#  / \     \
# 4   6     12

tree_value_count(a,  6) # -> 3

test_01:

a = Node(12)
b = Node(6)
c = Node(6)
d = Node(4)
e = Node(6)
f = Node(12)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#      12
#    /   \
#   6     6
#  / \     \
# 4  6     12

tree_value_count(a,  12) # -> 2
'''