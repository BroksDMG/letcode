/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let sortedA = nums1.sort((a, b) => a - b);
  let sortedB = nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  let res = [];
  while (i < sortedA.length && j < sortedB.length) {
    if (sortedA[i] === sortedB[j]) {
      if (!res.includes(sortedA[i])) {
        res.push(sortedA[i]);
      }
      i++;
      j++;
    } else if (sortedA[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  console.log(res);
};
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
