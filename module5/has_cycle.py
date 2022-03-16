def has_cycle(graph):
  '''
  white-grey-black graph algorithm
  used to detect cycles within a directed graph
  white: unexplored
  grey: visiting
  black: visited
  '''
  visiting = set()
  visited = set()
  for start_node in graph:
    if cycle_detect(graph, start_node, visiting, visited):
      return True
  return False

def cycle_detect(graph, node, visiting, visited):
  if node in visited:
    return False
  if node in visiting:
    return True
  visiting.add(node)

  for neighbor in graph[node]:
    if cycle_detect(graph, neighbor, visiting, visited) == True:
      return True
  # change color from grey to black
  visiting.remove(node)
  visited.add(node)
  return False