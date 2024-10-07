function sliding(arr, k) {
  let maxOnes = 0; // Maksymalna liczba jedynek po zamianie zer na jedynki
  let windowOnesCount = 0; // Liczba jedynek w obecnym oknie
  let left = 0; // Lewy wskaźnik okna

  // Przesuwamy prawy wskaźnik po tablicy
  for (let right = 0; right < arr.length; right++) {
    // Zwiększamy licznik jedynek, jeśli element na pozycji 'right' to 1
    if (arr[right] === 1) {
      windowOnesCount++;
    }

    // Jeśli okno ma długość większą niż 'k', przesuwamy lewy wskaźnik
    if (right - left + 1 > k) {
      if (arr[left] === 1) {
        windowOnesCount--;
      }
      left++;
    }

    // Liczba jedynek = bieżąca liczba jedynek w oknie + liczba zer, które możemy zamienić
    maxOnes = Math.max(
      maxOnes,
      windowOnesCount + (k - (right - left + 1 - windowOnesCount))
    );
  }

  return maxOnes;
}
console.log(sliding([1, 1, 0, 0, 1, 0, 1, 0, 1, 1], 5));
// console.log(sliding([0, 0, 1, 1, 1, 0, 1], 4));
