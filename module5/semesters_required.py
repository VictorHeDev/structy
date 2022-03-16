def semesters_required(num_courses, prereqs):
  def build_graph(prereqs):
    graph = {}
    for courses in prereqs:
      prereq, higher_course = courses[0], courses[1]
      if prereq not in graph:
        graph[prereq] = []
      if higher_course not in graph:
        graph[higher_course] = []
      graph[higher_course].append(prereq)
    return graph

  graph = build_graph(prereqs)

  def max_traverse(node):
    max_count = 1
    for neib in graph[node]:
      max_count = max(max_count, 1 + max_traverse(neib))
    return max_count

  semesters = 1

  for key in graph.keys():
    semesters = max(semesters, max_traverse(key))

  return semesters