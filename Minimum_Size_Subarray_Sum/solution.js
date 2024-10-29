/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let curSum = 0;
  let minSum = Infinity;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (curSum >= target) {
      minSum = Math.min(minSum, curSum);
      curSum -= nums[left];
      left++;
      i--;
    }
  }
  console.log(minSum);
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// 0 1 2 3 = 2+3+1+2=8         left=0, left ++; right --;
// 1 2 3 = 3+1+2=7             left=1, left ++; right --;
// 2 3 4 = 1+2+4=7
// 3 4 5 = 2+4+3 =9
// 4 5 = 4+3 =7
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
