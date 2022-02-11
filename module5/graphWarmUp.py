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

# BFS
from collections import deque
def breadth_first_print(graph, start):
  queue = deque([ start ])

  while queue:
    current = queue[0]
    print(current)
    queue.popleft()

    for neighbor in graph[current]:
      queue.append(neighbor)

graph = {
  'a': ['b', 'c'],
  'b': ['d'],
  'c': ['e'],
  'd': ['f'],
  'e': [],
  'f': []
}

# print(depth_first_iter_print(graph, 'a'))
# print('---------')
# print(depth_first_recursive_print(graph, 'a'))
# print('---------')
print(breadth_first_print(graph, 'a'))