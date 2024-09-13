/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n; // Zredukuj k

  // Użyj wycinków (slice) i połącz (concat)
  nums.unshift(...nums.splice(n - k, k));
};
console.log(rotate([1, 2, 3, 4, 5], 4));
//5,4,3,2,1

//4,3,2,1,5
//3,2,1,5,4
//2,1,5,4,3
//1,5,4,3,2
// for (let i = 0; i < k; i++) {
//   let t = nums.splice(0, len - 1);
//   nums.push(...t);
// }
