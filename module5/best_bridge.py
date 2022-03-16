from collections import deque

def best_bridge(grid):
  '''
  STRAT:
  - find the coordinates of one island first and save it to a visited set
  - then use BFS to iterate through each node in the visited set
  - compare the shortest path lengths and return the shortest bridge
  - account by off by one error 
  '''
  main_island = None

  for r in range(len(grid)):
    for c in range(len(grid[0])):
      potential_island = traverse_island(grid, r, c, set())
      if len(potential_island) > 0:
        main_island = potential_island
        break

  visited = set(main_island)
  queue = deque([])
  for pos in main_island:
    r, c = pos
    queue.append((r, c, 0))

  while queue:
    r, c, distance = queue.popleft()
    if grid[r][c] == 'L' and (r, c) not in main_island:
      return distance - 1

    deltas = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    for delta in deltas:
      dx, dy = delta
      neighbor_x, neighbor_y = r + dx, c + dy
      if is_inbounds(grid, neighbor_x, neighbor_y) and (neighbor_x, neighbor_y) not in visited:
        visited.add((neighbor_x, neighbor_y))
        queue.append((neighbor_x, neighbor_y, distance + 1))



def traverse_island(grid, row, col, visited):
  if not is_inbounds(grid, row, col) or grid[row][col] == 'W':
    return visited

  pos = (row, col)
  if pos in visited:
    return visited

  visited.add(pos)
  traverse_island(grid, row - 1, col, visited)
  traverse_island(grid, row + 1, col, visited)
  traverse_island(grid, row, col - 1, visited)
  traverse_island(grid, row, col + 1, visited)

  return visited


def is_inbounds(grid, r, c):
  row_inbounds = 0 <= r < len(grid)
  col_inbounds = 0 <= c < len(grid[0])
  return row_inbounds and col_inbounds


