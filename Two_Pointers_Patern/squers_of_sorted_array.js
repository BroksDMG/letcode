/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let j = nums.length - 1;
  let i = 0;
  while (j >= 0) {
    let cursquare = 0;
    let leftsquare = Math.pow(nums[i], 2);
    let rightsquare = Math.pow(nums[j], 2);
    if (leftsquare < rightsquare) {
      nums[j] = rightsquare;
      j--;
    } else {
      cursquare = nums[j];
      nums[j] = leftsquare;
      nums[i] = cursquare;
      j--;
    }
  }
  return nums;
};
// [16,1,0,9,100]  16<100? True => J--
// [16,1,0,9,100]  16<9? False => zmiana
// [9,1,0,16,100]  9<0?  False => zmiana
// [0,1,9,16,100]  0<1?  True =>zmiana

// [16,1,0,9,100]  16<100? True => J--
// [16,1,0,9,100]  16<9? False => zmiana
// [9,1,0,16,100]  9<0?  False => zmiana
// [0,1,9,16,100]  0<1?  True =>zmiana
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
