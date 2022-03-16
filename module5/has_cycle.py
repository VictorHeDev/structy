def has_cycle(graph):

  visiting = set()
  visited = set()

  def traverse(node, visiting, visited):
    if node in visited:
      return False

    if node in visiting:
      return True

    visiting.add(node)

    for neib in graph[node]:
      if traverse(neib, visiting, visited):
        return True

    visiting.remove(node)
    visited.add(node)

    return False

  for node in graph.keys():
    if traverse(node, visiting, visited):
      return True

  return False




