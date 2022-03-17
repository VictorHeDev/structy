def non_adjacent_sum(nums):
  if not nums:
    return 0
  if len(nums) <= 2:
    return max(nums)
  tab = [nums[0]] + [max(nums[0], nums[1])] + [0] * (len(nums)-2)
  for i in range(2, len(nums)):
    tab[i] = max(nums[i]+tab[i-2], tab[i-1])
  return tab[-1]
