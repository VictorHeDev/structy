/*
largest component

Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.
test_00:

largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4

test_01:

largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6

test_02:

largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5
*/

/*
APPROACH
- we need to iterate through the nodes of the adjacency list
- we can also use a DFS to traverse through the node components (and count)
*/

const largestComponent = (graph) => {
  let visited = new Set();
  let longest = 0;

  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }

  return longest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;
  visited.add(node);

  let size = 1; // this represents the CURRENT NODE as a size of 1
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};
