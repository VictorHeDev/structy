/*
connected components count

Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
test_00:

connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2

test_01:

connectedComponentsCount({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}); // -> 1

test_02:

connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}); // -> 3
*/

/*
APPROACH
- iterate through the adjacency list
- use DFS to traverse through the current node's neighbors
- add those nodes to a visited Set
- after the current nodes have been traversed via DFS, continue to the next node in the adjacency list
*/

const connectedComponentsCount = (graph) => {
  let visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }

  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;
  visited.add(String(current));

  for (neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }

  return true;
};
