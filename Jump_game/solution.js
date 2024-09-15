/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) return true;
  const arrLastIndex = nums.length - 1;
  let res = false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums[i]; j++) {
      if (nums[i] + i >= arrLastIndex || j + nums[j] >= arrLastIndex) {
        res = true;
      } else {
        res = false;
      }
    }
  }
  return res;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([1]));
console.log(canJump([1, 2, 3]));
console.log(canJump([0, 2, 3]));
console.log(canJump([3, 0, 8, 2, 0, 0, 1]));

//[0:2,1:3,2:1,3:1,4:4]
//
