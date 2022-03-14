const closestCarrot = (grid, startRow, startCol) => {
  let queue = [{ pos: [startRow, startCol], level: 0 }];
  let coordinates = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    let { pos, level } = queue.shift();
    let [row, col] = pos;

    if (grid[row][col] === 'C') return level;
    grid[row][col] = 'X';

    for (let coor of coordinates) {
      let [dx, dy] = coor;
      let new_x = row + dx;
      let new_y = col + dy;

      if (
        new_x >= 0 &&
        new_y >= 0 &&
        new_x < grid.length &&
        new_y < grid[0].length &&
        grid[new_x][new_y] !== 'X'
      ) {
        queue.push({ pos: [new_x, new_y], level: level + 1 });
      }
    }
  }

  return -1;
};
