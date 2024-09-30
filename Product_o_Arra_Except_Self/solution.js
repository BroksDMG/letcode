/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
};
//pomnożyć ze sobą każdą liczbe oprócz a[i] i dodać do tablicy
console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([-1]));
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// // Output: [0,0,9,0,0]
