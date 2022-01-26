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