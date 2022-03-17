def summing_squares(n, memo = None):
  if n <= 1:
    return n
  if memo is None:
    memo = {}
  if n in memo:
    return memo[n]
  closest_square = int((n**.5)//1)
  smallest = float("inf")
  for i in range(closest_square, 0, -1):
    current = summing_squares(n-(i**2), memo)
    smallest = min(smallest, current)
  memo[n] = 1 + smallest
  return memo[n]

