/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const majority = Math.floor(nums.length / 2);
  //chceck the same numbers
  let repeat = 0;
  let mostRepeat = 0;
  let repeatNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        repeat++;
        //jeżeli najwięcej powtórzeń jest większza lub równe aktualnym Powtórzeniom to zostaje /inaczej aktualne powtórzenia to najwięcej
        mostRepeat = mostRepeat >= repeat ? mostRepeat : repeat;
        //jeżeli najwiecej powtózen jest mniejsze lub rowne altyalnym to jest największa liczba
        if (mostRepeat <= repeat) {
          repeatNumber = nums[i];
        }
      }
    }
    repeat = 0;
  }
  if (majority <= mostRepeat) return repeatNumber;
  else return 0;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function (nums) {
//   //majority target = nums lenght/ 2 without rest
//   const majority = Math.floor(nums.length / 2);
//   console.log("majority", majority);
//   //chceck the same numbers
//   let repeat = 0;
//   let mostRepeat = 0;
//   let repeatNumber = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         repeat++;
//         //jeżeli najwięcej powtórzeń jest większza lub równe aktualnym Powtórzeniom to zostaje /inaczej aktualne powtórzenia to najwięcej
//         mostRepeat = mostRepeat >= repeat ? mostRepeat : repeat;
//         //jeżeli najwiecej powtózen jest mniejsze lub rowne altyalnym to jest największa liczba
//         if (mostRepeat <= repeat) {
//           repeatNumber = nums[i];
//         }
//         console.log("target", repeatNumber);
//         console.log("te same" + nums[i] + nums[j]);
//       } else {
//         console.log("inne ", nums[i], nums[j]);
//       }
//       console.log(repeat);
//       console.log(mostRepeat);
//     }
//     repeat = 0;
//   }
//   if (majority <= mostRepeat) return repeatNumber;
//   else return 0;
// };

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// console.log(majorityElement([3, 2, 3]));
