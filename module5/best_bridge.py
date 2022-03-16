def best_bridge(grid):
  import collections

  dires = [(0,1), (1,0), (-1,0), (0,-1)]
  queue = collections.deque([])
  visited = set()

  break_flag = False
  for i in range(len(grid)):
    if break_flag == True:
      break
    for j in range(len(grid[0])):
      if grid[i][j] == 'L':
        queue.append((i, j, 0))
        break_flag = True
        break

  def find_initial_island(row, col):
    for dire in dires:
      new_row, new_col = dire[0] + row, dire[1] + col
      if 0 <= new_row < len(grid) and 0 <= new_col < len(grid[0]) and (new_row, new_col) not in visited and grid[new_row][new_col] == 'L':
        queue.append((new_row, new_col, 0))
        visited.add((new_row, new_col))
        find_initial_island(new_row, new_col)

  find_initial_island(queue[0][0], queue[0][1])

  while queue:
    spot = queue.popleft()
    row, col, steps = spot[0], spot[1], spot[2]
    visited.add((row, col))
    if grid[row][col] == 'L' and steps != 0:
      return steps - 1
    for dire in dires:
      new_row, new_col = dire[0] + row, dire[1] + col
      if 0 <= new_row < len(grid) and 0 <= new_col < len(grid[0]) and (new_row, new_col) not in visited:
        queue.append((new_row, new_col, steps+1))
