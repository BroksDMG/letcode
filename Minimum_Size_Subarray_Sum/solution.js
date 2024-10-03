/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let windowsum = 0;
  let minlenght = Infinity;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    windowsum += nums[i];

    while (windowsum >= target) {
      minlenght = Math.min(minlenght, i - start + 1);
      windowsum -= nums[start];
      start++;
    }
  }
  return minlenght === Infinity ? 0 : minlenght;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
