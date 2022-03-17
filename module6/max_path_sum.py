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
