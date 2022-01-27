"""
pair sum

Write a function, pair_sum, that takes in a list and a target sum as arguments. The function should return a tuple containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
test_00:

pair_sum([3, 2, 5, 4, 1], 8) # -> (0, 2)

test_01:

pair_sum([4, 7, 9, 2, 5, 1], 5) # -> (0, 5)

test_02:

pair_sum([4, 7, 9, 2, 5, 1], 3) # -> (3, 5)

Approach:
- use a hash map so we can solve this in O(n) time and O(n) space
"""

# brute force
def pair_sum(numbers, target_sum):
  store = {}
  for i, num in enumerate(numbers):
    if num in store:
      return (store[num], i)
    difference = target_sum - num
    store[difference] = i