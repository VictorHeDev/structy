"""
compress

Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.

Approach:
- Use a 2 pointers strategy
- keep track of the char you're checking and the current char when iterating
- when the current vs. og char are different, calculate the difference
- for the last char, satisfy the edge case where i goes out of index error
"""

# brute force
def compress(s):
  j = 0
  resultArr = []
  curr = s[0]

  for i in range(len(s) + 1):
    if i == len(s):
      compressHelper(i, j, curr, resultArr)
      break
    candidate = s[i]
    if curr != candidate:
      compressHelper(i, j, curr, resultArr)
      j = i
      curr = s[j]
  return "".join(resultArr)

def compressHelper(endIdx, startIdx, currentChar, resultArr):
  if (endIdx - startIdx) > 1:
    resultArr.append(str(endIdx - startIdx))
  resultArr.append(currentChar)

# solution
def compress(s):
  s += '!'  # here we add an arbitrary symbol at the end of the input str
  result = []
  i = 0
  j = 0
  while j < len(s):
    if s[i] == s[j]:
      j += 1
    else:
      num = j - i

      if num > 1:
        result.append(str(num))
      result.append(s[i])

      i = j

  return "".join(result)