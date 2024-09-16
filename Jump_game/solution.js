/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false; // Jeśli nie można dotrzeć do tego indeksu, zwróć false
    farthest = Math.max(farthest, i + nums[i]); // Oblicz najdalszy zasięg
    if (farthest >= nums.length - 1) return true; // Jeśli można dotrzeć do końca, zwróć true
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([1]));
console.log(canJump([1, 2, 3]));
console.log(canJump([0, 2, 3]));
console.log(canJump([3, 0, 8, 2, 0, 0, 1]));

//[0:2,1:3,2:1,3:1,4:4]
//
