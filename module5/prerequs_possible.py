def prereqs_possible(num_courses, prereqs):

  def build_graph(prereqs):
    courses_to_prereqs = {}
    for prereq in prereqs:
      A, B = prereq[0], prereq[1]
      if A not in courses_to_prereqs:
        courses_to_prereqs[A] = []
      if B not in courses_to_prereqs:
        courses_to_prereqs[B] = []
      courses_to_prereqs[B].append(A)
    return courses_to_prereqs

  courses_to_prereqs = build_graph(prereqs)

  visited = set()
  visiting = set()
  def has_cycle(node):
    if node in visited:
      return False
    if node in visiting:
      return True
    visiting.add(node)
    for neib in courses_to_prereqs[node]:
      if has_cycle(neib):
        return True
    visiting.remove(node)
    visited.add(node)
    return False

  for node in courses_to_prereqs.keys():
    if has_cycle(node):
      return False

  return True


