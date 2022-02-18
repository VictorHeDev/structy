"""
uncompress
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:
<number><char>
for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' is a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

Strategy:
- Use 2 pointer
  1. keep track of number
  2. keep track of char

"""

# brute force approach
def uncompress(s):
  res = []
  i = 0

  for j in range(len(s)):
    if s[j].isalpha():
      res.append(int(s[i:j]) * s[j])
      i = j + 1
  return "".join(res)

# solution
def uncompress(s):
  numbers = '0123456789'
  result = []
  i = 0
  j = 0
  while j < len(s):
    if s[j] in numbers:
      j += 1
    else:
      num = int(s[i:j])
      result.append(s[j] * num)
      j += 1
      i = j

  return ''.join(result)

"""
Complexity
n = # of groups
m = max # for any group
Time: O(nm)
Space: O(nm)
"""