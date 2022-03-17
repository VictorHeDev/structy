def min_change(amount, coins, memo=None):
  if amount == 0:
    return 0
  if amount < 0:
    return -1
  if memo is None:
    memo = {}
  if amount in memo:
    return memo[amount]
  min_ways = float("inf")
  for coin in coins:
    path = min_change(amount - coin, coins, memo)
    if path != -1:
      min_ways = min(min_ways, 1 + path)
  memo[amount] = min_ways
  if min_ways == float("inf"):
    return -1
  return min_ways
