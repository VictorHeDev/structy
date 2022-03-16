def prereqs_possible(num_courses, prereqs):
  '''
  build adjacency list
  cycle detection using white-grey-black algo
  '''
  graph = build_graph(num_courses, prereqs)
  visiting = set()
  visited = set()

  for starting_node in graph:
    if travese_white_grey_black(graph, starting_node, visiting, visited) == True:
      return False
  return True

def travese_white_grey_black(graph, node, visiting, visited):
  if node in visited:
    return False
  if node in visiting:
    return True

  visiting.add(node)

  for neighbor in graph[node]:
    if travese_white_grey_black(graph, neighbor, visiting, visited):
      return True

  visiting.remove(node)
  visited.add(node)

  return False

def build_graph(num_courses, prereqs):
  adj_list = {}
  for i in range(0, num_courses):
    adj_list[i] = []

  for a, b, in prereqs:
    adj_list[a].append(b)

  return adj_list

