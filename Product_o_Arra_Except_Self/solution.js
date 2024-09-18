// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function (nums) {
//   let answerarr = [];
//   for (let i = 0; i < nums.length; i++) {
//     let curmul = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;
//       curmul *= nums[j];
//     }
//     answerarr.push(curmul);
//   }
//   return answerarr;
// };
//pomnożyć ze sobą każdą liczbe oprócz a[i] i dodać do tablicy
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([-1]));
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// // Output: [0,0,9,0,0]

var productExceptSelf = function (nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Oblicz iloczyny z lewej strony dla każdego elementu
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Oblicz iloczyny z prawej strony i pomnóż je przez obliczone wcześniej wartości
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};
