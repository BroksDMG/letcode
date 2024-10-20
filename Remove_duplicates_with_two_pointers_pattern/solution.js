/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n.length === 0) return 0; // Obsługa pustej tablicy
  let i = 0;
  let j = 1;
  while (j <= n.length) {
    if (n[i] !== n[j]) {
      i++;
      n[i] = n[j];
    }
    console.log(n);
    j++;
  }
  return i + 1;
};
console.log(isHappy([1, 1, 2]));
console.log(isHappy([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Przykład 1:
// Input: nums = [1, 1, 2]
// Output: 2, nums = [1, 2, _]
// Wyjaśnienie: Twój wynik to nowa długość 2, a pierwsze dwa elementy tablicy to 1 i 2. Nieistotne jest, co znajduje się w pozostałych miejscach.

// Przykład 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Wyjaśnienie: Twój wynik to nowa długość 5, a pierwsze pięć elementów tablicy to 0, 1, 2, 3 i 4. Pozostałe elementy nie są istotne.
