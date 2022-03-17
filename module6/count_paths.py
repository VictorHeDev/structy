def recur_count_paths(grid):
  '''
  - have base cases return 1 (no moves till end of grid)
  - binary tree
  '''
  return _recur_count_paths(grid, 0, 0)

def _recur_count_paths(grid, r, c):
  # if out of bounds or hits a wall
  if r == len(grid) or c == len(grid[0]) or grid[r][c] == 'X':
    return 0

  if r == len(grid) - 1 and c == len(grid[0]) - 1:
    return 1

  # moving downwards
  down_count = _recur_count_paths(grid, r + 1, c)
  # moving right
  right_count = _recur_count_paths(grid, r, c + 1)
  return down_count + right_count