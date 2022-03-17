def non_adjacent_sum(nums):
  if not nums:
    return 0
  if len(nums) <= 2:
    return max(nums)
  tab = [nums[0]] + [max(nums[0], nums[1])] + [0] * (len(nums)-2)
  for i in range(2, len(nums)):
    tab[i] = max(nums[i]+tab[i-2], tab[i-1])
  return tab[-1]

# recursion
def non_adjacent_sum(nums):
  return _non_adjacent_sum(nums)

def _non_adjacent_sum(nums):
  if len(nums) == 0:
    return 0

  include_first = nums[0] + _non_adjacent_sum(nums[2:])
  exclude_first = _non_adjacent_sum(nums[1:])
  return max(include_first, exclude_first)

# memoized
def non_adjacent_sum(nums):
  return _non_adjacent_sum(nums, 0, {})

def _non_adjacent_sum(nums, i, memo):
  if i in memo:
    return memo[i]
  # use i to represent the starting idx instead of slicing
  if i >= len(nums):
    return 0

  include_first = nums[i] + _non_adjacent_sum(nums, i + 2, memo)
  exclude_first = _non_adjacent_sum(nums, i + 1, memo)

  memo[i] = max(include_first, exclude_first)
  return memo[i]

