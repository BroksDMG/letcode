/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = 0;
  let sotrted = citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    // if (citations.length <= 1) return 1;
    if (sotrted[i] >= i + 1) h++;
    // console.log(h);
  }
  return h;
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1]));
console.log(hIndex([100]));
console.log(hIndex([10, 8, 5, 4, 3]));
// //10, f(B)=8, f(C)=5, f(D)=3, f(E)=3
console.log(hIndex([25, 8, 5, 3, 3]));
// //25, f(B)=8, f(C)=5, f(D)=3, f(E)=3
console.log(hIndex([1, 3, 1]));
