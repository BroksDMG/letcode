/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length <= 1) return nums;

  let steps = k;
  let len = nums.length;
  if (k > len) {
    steps = steps - Math.floor(k / len) * len;
  }
  for (let i = 0; i < k; i++) {
    let t = nums.splice(0, len - 1);
    nums.push(...t);
  }
};
console.log(rotate([1, 2, 3, 4, 5], 13));
let xk = 4;
let ylen = 5;
let rot = Math.floor(xk / ylen);
// console.log(rot);

console.log(rotate());
