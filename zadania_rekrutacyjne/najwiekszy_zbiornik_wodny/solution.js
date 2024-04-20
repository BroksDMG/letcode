("use strict");
function largestWaterArea(grid) {
  let maxArea = 0;

  function dfs(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === 0
    ) {
      return 0;
    }

    grid[i][j] = 0;
    let area = 1;

    area += dfs(i - 1, j);
    area += dfs(i + 1, j);
    area += dfs(i, j - 1);
    area += dfs(i, j + 1);

    return area;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  return maxArea;
}

console.log(
  largestWaterArea([
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1],
  ])
); // => 9
