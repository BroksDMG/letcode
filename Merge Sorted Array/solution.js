/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const res = nums1
    .filter((el) => el !== 0)
    .concat(nums2.filter((el) => el !== 0))
    .sort();
  return res;
};
const solution = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

console.log(solution);
