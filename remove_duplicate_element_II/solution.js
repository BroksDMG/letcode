/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //input:tablica numerów
  //iteracja

  //pierwszy element chwycić i porównać do reszty
  //jesli jest podobny to count ++
  //count większe od 2 break;
  const duplicates = nums.filter((item, index) => nums.indexOf(item) === index);
  console.log(duplicates);
  let countduplicate = 0;
  let oryginalArrat = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], nums[i + 1], countduplicate);
    if (nums[i] === nums[i + 1]) countduplicate++;
    if (countduplicate > 2) break;
    oryginalArrat.push(nums[i]);

    // countduplicate = 0;
    console.log(oryginalArrat);
  }
  //output:długość tablicy w której elementy nie powtarzają sie wiecej niz dwa razy
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
