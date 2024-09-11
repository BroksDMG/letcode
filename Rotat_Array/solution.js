/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length <= 1) return nums;

  //przesuwanie tablicy o k elementy w prawo =>array[i+k]
  //pierwsze użycie algorytmu bubble sort
  //jak nie ma miejsca w prawo to jakoś od nowa tablicy i+k>array.lenght? k-i, i=0;
  //   let temp;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < k; j++) {
  //       temp = nums[j];
  //       nums[j] = nums[j + 1];
  //       nums[j + 1] = temp;
  //       console.log(nums);
  //     }
  //   }
  console.log(10 / );
  for (let i = 0; i < k; i++) {
    let t = nums.splice(0, nums.length - 1);
    nums.push(...t);
  }
  console.log(nums);
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
