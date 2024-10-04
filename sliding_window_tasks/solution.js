function sliding(arr, k) {
  let right = k;
  let sumwindow = 0;
  let highest = 0;
  for (let i = 0; i < k; i++) {
    sumwindow += arr[i];
  }
  highest = sumwindow;

  for (let i = k; i < arr.length; i++) {
    sumwindow = sumwindow - arr[i - k] + arr[i];

    highest = Math.max(sumwindow, highest);
  }
  return highest;
}
console.log(sliding([2, 1, 5, 1, 3, 2], 3));
console.log(sliding([2, 3, 4, 1, 5], 2));
