/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height < 2) return height[0];
  let j = height.length - 1;
  let maxSum = 0;
  for (let i = 0; i < height.length; i++) {
    if (i >= j) return maxSum;
    let length = j - i;
    let h = Math.min(height[i], height[j]);
    if (height[i] > height[j]) {
      i--;
      j--;
    }
    if (h * length > maxSum) {
      maxSum = h * length;
    }
  }
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
// 9-1=8
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
