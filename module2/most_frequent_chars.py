"""
most frequent char

Write a function, most_frequent_char, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
test_00:

most_frequent_char('bookeeper') # -> 'e'

test_01:

most_frequent_char('david') # -> 'd'
"""

# brute force
from collections import Counter
from socket import RDS_RDMA_FENCE

def most_frequent_char(s):
  store = Counter(s)
  maximum = float('-inf')
  returnChar = None

  for char in store:
    if store[char] > maximum:
      maximum = store[char]
      returnChar = char

  return returnChar

