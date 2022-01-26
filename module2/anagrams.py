"""
anagrams

Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
test_00:

anagrams('restful', 'fluster'); // -> true

test_01:

anagrams('cats', 'tocs'); // -> false
"""

# brute force
def anagrams(s1, s2):
  store = {}

  for char in s1:
    store[char] = store.get(char, 0) + 1

  for char in s2:
    if char not in store:
      return False
    else:
      store[char] -= 1

  return all(val == 0 for val in store.values())

# solution 1: we can compare the 2 dicts
def anagrams(s1, s2):
  return char_count(s1) == char_count(s2)

def char_count(s):
  count = {}

  for char in s:
    if char not in count:
      count[char] = 0

    count[char] += 1

  return count

# solution 2: use built in modules
# Counter is essentially a dict where keys = elements, values = count
from collections import Counter

def anagrams(s1, s2):
  return Counter(s1) == Counter(s2)
