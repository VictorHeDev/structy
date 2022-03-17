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

# recursive
import math
def summing_squares(n):
  if n == 0:
    return 0

  min_squares = float('inf')
  for i in range(1, math.floor(math.sqrt(n)) + 1):
    square = i ** 2
    num_squares = 1 + summing_squares(n - square)
    min_squares = min(min_squares, num_squares)

  return min_squares

# memoized
def summing_squares(n):
  return _summing_squares(n, {})

def _summing_squares(n, memo):
  if n in memo:
    return memo[n]
  if n == 0:
    return 0

  min_squares = float('inf')
  for i in range(1, math.floor(math.sqrt(n)) + 1):
    square = i ** 2
    num_squares = 1 + _summing_squares(n - square, memo)
    min_squares = min(min_squares, num_squares)

  memo[n] = min_squares
  return memo[n]