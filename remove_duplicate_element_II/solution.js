/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;
  let dupcount = 0;
  let sortnums = nums;
  for (let i = 0; i < sortnums.length; i++) {
    if (sortnums[i] === sortnums[i + 1]) dupcount++;
    else dupcount = 0;
    if (dupcount > 1) {
      sortnums.splice(i, 1);
      i--;
    }
  }
  return sortnums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
