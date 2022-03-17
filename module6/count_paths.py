def count_paths(grid):
  for i in range(len(grid)):
    if grid[i][0] != "X":
      grid[i][0] = 1
    else:
      break
  for i in range(len(grid[0])):
    if grid[0][i] != "X":
      grid[0][i] = 1
    else:
      break
  for i in range(1, len(grid)):
    for j in range(1, len(grid[0])):
      total = 0
      if grid[i][j] != "X":
        if grid[i][j-1] != "X" and grid[i][j-1] != "O":
          total += grid[i][j-1]
        if grid[i-1][j] != "X" and grid[i-1][j] != "O":
          total += grid[i-1][j]
      grid[i][j] = total
  return grid[len(grid)-1][len(grid[0])-1]