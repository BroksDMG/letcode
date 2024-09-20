/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let answerarr = new Array(nums.length).fill(1);
  let left = 1;
  for (let i = 1; i < nums.length; i++) {
    answerarr[i] = left;
    left *= nums[i];
    // console.log(answerarr);
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answerarr[i] *= right;
    right *= nums[i];
    console.log(answerarr);
  }
  return answerarr;
};
//pomnożyć ze sobą każdą liczbe oprócz a[i] i dodać do tablicy
console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([-1]));
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// // Output: [0,0,9,0,0]
