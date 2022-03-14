from collections import deque

def closest_carrot(grid, starting_row, starting_col):
  '''
  - "shortest path" to carrot -> use bfs
  - write a function to check if in_bounds
  - need some sort of way to track num step step for path
  '''

  def is_inbounds(row, col):
    row_inbounds = 0 <= row < len(grid)
    col_inbounds = 0 <= col < len(grid[0])
    return row_inbounds and col_inbounds

  queue = deque([(starting_row, starting_col, 0)])
  coordinates = [(-1, 0), (1,0), (0, -1), (0, 1)]

  while queue:
    x, y, num_steps = queue.popleft()
    if grid[x][y] == 'C':
      return num_steps
    grid[x][y] = 'X'

    for dx, dy in coordinates:
      new_x, new_y = x + dx, y + dy
      if is_inbounds(new_x, new_y) and grid[new_x][new_y] != 'X':
        queue.append((new_x, new_y, num_steps + 1))

  return -1