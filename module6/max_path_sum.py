def max_path_sum(grid):
  row_len = len(grid)
  col_len = len(grid[0])
  for i in range(1, row_len):
    grid[i][0] += grid[i-1][0]
  for i in range(1, col_len):
    grid[0][i] += grid[0][i-1]
  for i in range(1, row_len):
    for j in range(1, col_len):
      grid[i][j] += max(grid[i-1][j], grid[i][j-1])
  return grid[row_len-1][col_len-1]

# memoized
def max_path_sum(grid):
  return _max_path_sum(grid, 0, 0, {})

def _max_path_sum(grid, r, c, memo):
  pos = (r, c)
  if pos in memo:
    return memo[pos]
  if r == len(grid) or c == len(grid[0]):
    # return an "invalid" number
    return float('-inf')

  if r == len(grid) - 1 and c == len(grid[0]) - 1:
    return grid[r][c]

  down = _max_path_sum(grid, r + 1, c, memo)
  right = _max_path_sum(grid, r, c + 1, memo)
  memo[pos] = grid[r][c] + max(down, right)
  return memo[pos]