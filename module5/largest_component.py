'''
largest component

Write a function, largest_component, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.
test_00:

largest_component({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}) # -> 4

test_01:

largest_component({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}) # -> 6

test_02:

largest_component({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}) # -> 5
'''

def largest_component(graph):
  visited = set()
  largest = 0

  for node in graph:
    size = explore_size(graph, node, visited)
    largest = max(size, largest)

  return largest

def explore_size(graph, current, visited):
  if current in visited:
    return 0
  visited.add(current)
  size = 1

  for neighbor in graph[current]:
    size += explore_size(graph, neighbor, visited)

  return size