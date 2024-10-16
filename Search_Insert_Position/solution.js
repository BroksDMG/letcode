/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);
  if (nums.length === 0) return 0;

  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return nums.indexOf(nums[i]);
  }
  return nums.length;
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([3, 5, 7, 9, 10], 8));
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
