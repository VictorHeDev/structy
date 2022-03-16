from collections import defaultdict
def semesters_required(num_courses, prereqs):
  '''
  INPUTS:
  int num_courses
  list of tuples prereqs
  we actually want to use a maximum number traversal -> DFS
  directed graph, but is it acyclic?

  STRAT:
  can we start from each starting node in adjacency list and then
  traverse using DFS -> and then find the min and save to variable
  which will then return at the end?
  we can start from the end (neighbors arr is empty), with value of 1
  call upon backwards like the last problem
  '''

  graph = build_graph(num_courses, prereqs)
  distances = {}
  longest = 0

  for course in graph:
    if len(graph[course]) == 0:
      distances[course] = 1

  for course in graph:
    traverse_distance(graph, course, distances)

  return max(distances.values())

def traverse_distance(graph, node, distances):
  if node in distances:
    return distances[node]

  max_distance = 0
  for neighbor in graph[node]:
    neighbor_distance = traverse_distance(graph, neighbor, distances)
    if neighbor_distance > max_distance:
      max_distance = neighbor_distance
  distances[node] = 1 + max_distance
  return distances[node]


def build_graph(num_courses, prereqs):
  graph = {}
  for course in range(0, num_courses):
    graph[course] = []

  for prereq in prereqs:
    a, b = prereq
    graph[a].append(b)

  return graph







