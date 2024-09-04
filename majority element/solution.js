/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const majority = Math.floor(nums.length / 2);
  //chceck the same numbers
  //1 musze mieć pętlę na pewno do iteracji
  //2 liczenie powtarzających sie liczb, np Re
  //3 liczba która sie powtarza
  //4 sposób żeby porównać liczby
  //1 posortować tablice i jak jeden jest równy następnemu to
  let Repeted = 1;
  let MostRepeted = 0;
  let Target = 0;
  const sorterdNums = nums.sort();
  for (let i = 0; i < sorterdNums.length; i++) {
    //jeżeli element jest równy następnemu to repeted ++ jeżeli nie to 0;
    if (sorterdNums[i] === sorterdNums[i + 1]) {
      Repeted++;
    } else {
      Repeted = 1;
    }
    if (Repeted >= MostRepeted) {
      Target = sorterdNums[i];
      MostRepeted = Repeted;
    }
  }
  if (MostRepeted >= majority) return Target;
  else return 0;
};
// majorityElement([2, 2, 1, 1, 1, 2, 2]);
// console.log();
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// console.log(majorityElement([2, 2, 1, 2, 3, 3, 1, 2, 2, 2]));
