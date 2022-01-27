"""
five sort

Write a function, five_sort, that takes in a list of numbers as an argument. The function should rearrange elements of the list such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original list. The function should return the list.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the list.
test_00

five_sort([12, 5, 1, 5, 12, 7])
# -> [12, 7, 1, 12, 5, 5]

test_01

five_sort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])
# -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]

Approach:
- use 2 pointer strategy with the pointers at the beginning and end of the list
- if end element is 5, decrement
- if start element is not a 5, increment
- swap
"""

# brute force
def five_sort(nums):
  start, end = 0, len(nums) - 1
  while start <= end:
    if nums[end] == 5:
      end -= 1
    elif nums[start] == 5:
        swap(start, end, nums)
        end -= 1
        start += 1
    else:
      start += 1
  return nums


def swap(i, j, array):
  array[i], array[j] = array[j], array[i]

# solution

