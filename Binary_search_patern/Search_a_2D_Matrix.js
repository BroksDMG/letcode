/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let low = 0;
    let right = matrix[i].length - 1;
    while (low <= right) {
      let middle = Math.floor((low + right) / 2);
      console.log(matrix[i][middle]);
      if (matrix[i][middle] === target) return true;
      if (matrix[i][middle] < target) {
        low = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return false;
};
