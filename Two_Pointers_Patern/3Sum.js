/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let j = nums.length - 1;
  let k = 1;
  let i = 0;
  let sortedNums = nums.sort((a, b) => a - b);
  let resArr = [];
  let tempArr = [];
  while (i < j) {
    if (
      !tempArr.includes(sortedNums[i]) &&
      !tempArr.includes(sortedNums[j]) &&
      !tempArr.includes(tempArr[k])
    ) {
      console.log(tempArr);
      tempArr.push(sortedNums[i], sortedNums[j], sortedNums[k]);
      if (sortedNums[i] + sortedNums[k] + sortedNums[j] > 0) {
        j--;
      } else {
        k++;
        i++;
      }
      if (sortedNums[i] + sortedNums[k] + sortedNums[j] === 0) {
        resArr.push(tempArr);
      }
    }
    sortedNums[i];
  }

  //if no posibility return [0]
  //if posibility return [[posibility]]
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
