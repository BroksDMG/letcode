function sliding(arr, k) {
  let sumwindow = 0;
  let max = 0;
  let countRow = 0;
  let secendZero = 0;
  for (let i = 0; i < k; i++) {
    countRow++;
    sumwindow += arr[i];
    if (arr[i] === 0) secendZero++;
    if (secendZero >= 2) {
      countRow = 0;
      secendZero = 0;
    }
    console.log(sumwindow, countRow, secendZero);
  }
  max = sumwindow;
  for (let i = k; i < arr.length; i++) {
    sumwindow = sumwindow - arr[i - k] + arr[i];
    // console.log(sumwindow);
  }
  //   console.log(max);
}
console.log(sliding([1, 1, 0, 0, 1, 0, 1, 0, 1, 1], 5));
// console.log(sliding([0, 0, 1, 1, 1, 0, 1], 4));
