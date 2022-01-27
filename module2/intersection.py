"""
intersection

Write a function, intersection, that takes in two lists, a,b, as arguments. The function should return a new list containing elements that are in both of the two lists.

You may assume that each input list does not contain duplicate elements.
test_00:

intersection([4,2,1,6], [3,6,9,2,10]) # -> [2,6]

test_01:

intersection([2,4,6], [4,2]) # -> [2,4]
"""

# brute force
def intersection(a, b):
  return list(set(a).intersection(set(b)))

# solution with list comprehension
def intersection(a, b):
  items_set = set(a)
  return [ ele for ele in b if ele in items_set ]