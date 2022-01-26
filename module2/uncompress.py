"""
uncompress
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:
<number><char>
for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' is a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
"""

def uncompress(s):
  resultArr = []
  multiplier = ""

  for i in range(len(s)):
    if s[i].isdigit():
      multiplier += s[i]
    else:
      for j in range(int(multiplier)):
        resultArr.append(s[i])
        multiplier = ""
  return "".join(resultArr)