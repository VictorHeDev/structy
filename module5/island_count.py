
def island_count(grid):
  counter = 0
  coordinates = [(-1, 0), (1, 0), (0, -1), (0, 1)]

  def dfs(row, col):
    if grid[row][col] == "W":
      return
    if grid[row][col] == "L":
      grid[row][col] = 'W'
    for dx, dy in coordinates:
      new_x, new_y = dx + row, dy + col
      if in_bounds(new_x, new_y):
        dfs(new_x, new_y)

  def in_bounds(row, col):
    if (row >= 0 and row < len(grid)) and (col >= 0 and col < len(grid[0])):
      return True
    return False

  for row in range(len(grid)):
    for col in range(len(grid[0])):
      if grid[row][col] == 'L':
        dfs(row, col)
        counter += 1

  return counter


def island_count(grid):
  counter = 0
  coordinates = [(-1, 0), (1, 0), (0, -1), (0, 1)]
  visited = set()

  for row in range(len(grid)):
    for col in range(len(grid[0])):
      if dfs(grid, row, col, visited, coordinates) == True:
        counter += 1

  return counter

def dfs(grid, row, col, visited, coordinates):
  if not in_bounds(row, col, grid):
    return False

  if grid[row][col] == 'W':
    return False

  pos = (row, col)
  if pos in visited:
    return False
  visited.add(pos)

  for dx, dy in coordinates:
    new_x, new_y = dx + row, dy + col
    dfs(grid, new_x, new_y, visited, coordinates)
  return True

def in_bounds(row, col, grid):
  row_inbounds = 0 <= row < len(grid)
  col_inbounds = 0 <= col < len(grid[0])
  return row_inbounds and col_inbounds

