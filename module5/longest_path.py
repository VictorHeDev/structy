def longest_path(graph):
  distance = {}
  for node in graph:
    if len(graph[node]) == 0:
      distance[node] = 0


  for node in graph:
    traverse_distance(graph, node, distance)

  return max(distance.values())

def traverse_distance(graph, node, distance):
  if node in distance:
    return distance[node]

  max_length = 0
  for neighbor in graph[node]:
    attempt = traverse_distance(graph, neighbor, distance)
    if attempt > max_length:
      max_length = attempt

  distance[node] = 1 + max_length
  return distance[node]