def sum_possible(amount, numbers, memo=None):
  if amount == 0:
    return True
  if amount < 0:
    return False
  if memo is None:
    memo = {}
  if amount in memo:
    return memo[amount]
  possible = False
  for num in numbers:
    if sum_possible(amount - num, numbers, memo):
      possible = True
  memo[amount] = possible
  return possible