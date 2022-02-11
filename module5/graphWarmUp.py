# DFS iterative
def depth_first_iter_print(graph, start):
  stack = [ start ]

  while len(stack) > 0:
    current = stack[-1]
    print(current)
    stack.pop()

    for neighbor in graph[current]:
      stack.append(neighbor)

# DFS recursive
def depth_first_recursive_print(graph, current):
  print(current)

  for neighbor in graph[current]:
    depth_first_iter_print(graph, neighbor)


graph = {
  'a': ['b', 'c'],
  'b': ['d'],
  'c': ['e'],
  'd': ['f'],
  'e': [],
  'f': []
}

print(depth_first_iter_print(graph, 'a'))